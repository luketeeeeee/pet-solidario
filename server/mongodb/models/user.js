import mongoose from 'mongoose';

const User = new mongoose.Schema({
    username: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const UserSchema = mongoose.model('User', User);

export default UserSchema;
