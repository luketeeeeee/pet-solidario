import mongoose from 'mongoose';

const Message = new mongoose.Schema({
    text: { type: String, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const MessageSchema = mongoose.model('Message', Message);

export default MessageSchema;
