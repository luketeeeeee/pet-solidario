import mongoose, { Schema, mongo } from 'mongoose';

const Token = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 3600 },
});

const TokenSchema = mongoose.model('Token', Token);

export default TokenSchema;
