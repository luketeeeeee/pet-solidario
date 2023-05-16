import express from 'express';
import bcrypt from 'bcrypt';

import UserSchema from '../mongodb/models/user.js';
import validateSignIn from '../utils/validateSignIn.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { email, password } = req.body;

        const { error } = validateSignIn(req.body);

        if (error) return res.status(400).json({ message: 'Email ou senha inválidos!' });

        const user = await UserSchema.findOne({ email: email });
        const validPassword = await bcrypt.compare(password, user.password);

        if (!user || !validPassword)
            return res.status(401).json({ message: 'Email ou senha inválidos!' });

        const token = user.generateAuthToken();
        res.status(200).json({
            data: token,
            userId: user._id,
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Email ou senha inválidos!' });
    }
});

export default router;
