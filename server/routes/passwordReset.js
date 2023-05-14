import UserSchema from '../mongodb/models/user.js';
import TokenSchema from '../mongodb/models/token.js';
import sendEmail from '../utils/sendEmail.js';

import crypto from 'crypto';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import express from 'express';

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
        if (!token) {
            token = await TokenSchema.create({
                userId: user._id,
                token: crypto.randomBytes(32).toString('hex'),
            });
        }

        const link = `http://localhost:5173/mudar-senha/${user._id}/${token.token}`;
        await sendEmail(user.email, 'Mude sua senha', link);

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
        const { password } = req.body;
        const schema = Joi.object({ password: Joi.string().required() });

        const { error } = schema.validate(password);
        if (error) return res.status(400).json(error.details[0].message);

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
        const hashPassword = await bcrypt.hash(password, salt);

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
