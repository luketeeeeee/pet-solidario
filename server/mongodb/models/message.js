import mongoose from 'mongoose';
import UserSchema from './user';

const Message = new mongoose.Schema({
    text: { type: String, required: true },
});

const MessageSchema = mongoose.model('Message', Message);

export default MessageSchema;
