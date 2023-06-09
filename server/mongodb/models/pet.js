import mongoose from 'mongoose';

const Pet = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    sex: { type: String },
    breed: { type: String },
    ownerName: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    description: { type: String },
    adopted: { type: Boolean, required: true },
    photo: { type: String, required: true },
});

const PetSchema = mongoose.model('Pet', Pet);

export default PetSchema;
