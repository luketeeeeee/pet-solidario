import UserSchema from '../mongodb/models/user.js';
import TokenSchema from '../mongodb/models/token.js';
import sendEmail from '../utils/sendEmail.js';

import crypto from 'crypto';
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

        const link = `http://localhost:5173/password-reset/${user._id}/${token.token}`;
        await sendEmail(user.email, 'Mude sua senha', link);

        res.status(200).json({
            message:
                'Email de recuperação de senha enviado com sucesso! Não se esqueça de verificar sua caixa de spam!',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'something is wrong, i can feel it' });
    }
});

export default router;
