import express from 'express';
import bcrypt from 'bcrypt';

import UserSchema from '../mongodb/models/user.js';
import validateSignIn from '../utils/validateSignIn.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { error } = validateSignIn(req.body);

        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await UserSchema.findOne({ email: req.body.email });

        if (!user)
            return res
                .status(401)
                .send({ message: 'Email ou senha inválidos' });

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword)
            return res
                .status(401)
                .send({ message: 'Email ou senha inválidos' });

        const token = user.generateAuthToken();
        res.status(200).send({
            data: token,
            message: 'Login feito com sucesso',
        });
    } catch (error) {
        res.status(500).send({ message: 'num sei, só sei que foi assim' });
    }
});

export default router;
