import mongoose from 'mongoose';

const Pet = new mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    owner: { type: String, required: true },
});

const PetSchema = mongoose.model('Pet', Pet);

export default PetSchema;
