import express from 'express';
import bcrypt from 'bcrypt';

import UserSchema from '../mongodb/models/user.js';
import validateSignIn from '../utils/validateSignIn.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { email, password } = req.body;

        const { error } = validateSignIn(req.body);

        if (error)
            return res
                .status(400)
                .send({ message: 'Email ou senha inválidos!' });

        const user = await UserSchema.findOne({ email: email });

        if (!user)
            return res
                .status(401)
                .send({ message: 'Email ou senha inválidos!' });

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword)
            return res
                .status(401)
                .send({ message: 'Email ou senha inválidos!' });

        const token = user.generateAuthToken();
        res.status(200).send({
            data: token,
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'num sei, só sei que foi assim' });
    }
});

export default router;
