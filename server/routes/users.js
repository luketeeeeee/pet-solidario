import express from 'express';
import bcrypt from 'bcrypt';

import UserSchema from '../mongodb/models/user.js';
import validateSignUp from '../utils/validateSignUp.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { username, phoneNumber, email, password } = req.body;
        const { error } = validateSignUp(req.body);

        if (error)
            return res
                .status(400)
                .json({ message: error.details[0].message, success: false });

        const user = await UserSchema.findOne({ email: req.body.email });

        if (user)
            return res.status(409).json({
                message: 'Um usuário com esse email já foi criado!',
                success: false,
            });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await UserSchema.create({
            username,
            phoneNumber,
            email,
            password: hashPassword,
        });

        // await new UserSchema({ ...req.body, password: hashPassword }).save();
        return res.status(201).json({
            message: 'Você se cadastrou com sucesso!',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'something is wrong, i can feel it' });
    }
});

export default router;
