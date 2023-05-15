import UserSchema from '../mongodb/models/user.js';
import TokenSchema from '../mongodb/models/token.js';
import sendEmail from '../utils/sendEmail.js';

import crypto from 'crypto';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import express from 'express';
import validateNewPassword from '../utils/validateNewPassword.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email } = req.body;
        const schema = Joi.object({ email: Joi.string().email().required() });

        const { error } = schema.validate(req.body);
        if (error) {
            console.log(error.details[0].message);
            return res.status(400).json({
                message: 'Insira um email válido!',
                success: false,
            });
        }

        const user = await UserSchema.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                message: 'Insira um email válido!',
                success: false,
            });
        }

        let token = await TokenSchema.findOne({ userId: user._id });
        if (token) {
            return res.status(400).json({
                message: 'Um token de recuperação já está ativo para este usuário!',
            });
        } else {
            token = await TokenSchema.create({
                userId: user._id,
                token: crypto.randomBytes(32).toString('hex'),
            });
        }

        const link = `http://localhost:5173/mudar-senha/${user._id}/${token.token}`;
        await sendEmail(
            user.email,
            'Mude sua senha',
            `Olá, o link a seguir vai direcionar você para uma página em que será possível alterar sua senha\n ${link}`
        );

        res.status(200).json({
            message:
                'Email de recuperação de senha enviado com sucesso! Não se esqueça de verificar sua caixa de spam!',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something is wrong, i can feel it' });
    }
});

router.route('/:userIdParam/:tokenParam').post(async (req, res) => {
    try {
        const { userIdParam, tokenParam } = req.params;
        const { newPassword, confirmNewPassword } = req.body;

        if (newPassword !== confirmNewPassword) {
            return res.status(400).json({
                message: 'As senhas não coincidem!',
                success: false,
            });
        }

        const { error } = validateNewPassword(req.body);
        if (error) {
            if (error.details[0].type === 'passwordComplexity.numeric') {
                return res.status(400).json({
                    message: 'A senha deve conter pelo menos um número!',
                    success: false,
                });
            }

            if (
                error.details[0].type === 'passwordComplexity.uppercase' ||
                error.details[0].type === 'passwordComplexity.lowercase'
            ) {
                return res.status(400).json({
                    message: 'A senha deve conter caracteres maiúsculos e minúsculos!',
                    success: false,
                });
            }

            if (error.details[0].type === 'passwordComplexity.symbol') {
                return res.status(400).json({
                    message: 'A senha deve conter pelo menos um caracter especial!',
                    success: false,
                });
            }
        }

        const user = await UserSchema.findById(userIdParam);
        if (!user)
            return res.status(400).json({
                message: 'O link é inválido ou expirou',
                success: false,
            });

        const token = await TokenSchema.findOne({
            userId: user._id,
            token: tokenParam,
        });
        if (!token)
            return res.status(400).json({
                message: 'O link é inválido ou expirou',
                success: false,
            });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashPassword;
        await user.save();
        await token.delete();

        res.status(200).json({ message: 'A senha foi alterada com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something is wrong, i can feel it' });
    }
});

export default router;
