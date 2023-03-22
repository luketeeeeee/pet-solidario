import express from 'express';
import bcrypt from 'bcrypt';

import UserSchema from '../mongodb/models/user.js';
import validateSignUp from '../utils/validateSignUp.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { error } = validateSignUp(req.body);

        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await UserSchema.findOne({ email: req.body.email });

        if (user)
            return res
                .status(409)
                .send({ message: 'Um usuário com esse email já foi criado' });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new UserSchema({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: 'Usuário cadastrado com sucesso' });
    } catch {
        res.status(500).send({ message: 'something is wrong, i can feel it' });
    }
});

export default router;
