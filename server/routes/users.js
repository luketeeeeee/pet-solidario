import express from 'express';
import bcrypt from 'bcrypt';

import UserSchema from '../mongodb/models/user.js';
import validateSignUp from '../utils/validateSignUp.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { username, phoneNumber, email, password, confirmPassword } =
            req.body;

        const { error } = validateSignUp(req.body);

        if (error) {
            console.log(error);
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
                    message:
                        'A senha deve conter caracteres maiúsculos, minúsculos!',
                    success: false,
                });
            }

            if (error.details[0].type === 'passwordComplexity.symbol') {
                return res.status(400).json({
                    message:
                        'A senha deve conter pelo menos um caracter especial!',
                    success: false,
                });
            }
        }

        if (password !== confirmPassword)
            return res.status(409).json({
                message: 'As senhas não coincidem!',
                success: false,
            });

        const user = await UserSchema.findOne({ email: email });

        if (user)
            return res.status(409).json({
                message: 'Um usuário com esse email já foi criado!',
                success: false,
            });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(password, salt);

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
