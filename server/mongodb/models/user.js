import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const User = new mongoose.Schema({
    username: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// método criado para gerar tokens para um usuário logado
User.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: User._id }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: '14d',
    });

    return token;
};

const UserSchema = mongoose.model('User', User);

export default UserSchema;
