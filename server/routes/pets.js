import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import PetSchema from '../mongodb/models/pet.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route('/').get(async (req, res) => {
    try {
        const pets = await PetSchema.find({});
        res.status(200).json({ success: true, data: pets });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

router.route('/:petId').get(async (req, res) => {
    try {
        const { petId } = req.params;

        const pet = await PetSchema.findById(petId);
        res.status(200).json({ success: true, data: pet });
    } catch (error) {
        res.status(500).json({ sucess: false, message: error });
    }
});

router.route('/').post(async (req, res) => {
    try {
        const [
            { name, species, sex, breed, ownerName, ownerEmail, description, adopted },
            photo,
        ] = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPet = await PetSchema.create({
            name,
            species,
            sex,
            breed,
            ownerName,
            ownerEmail,
            description,
            adopted,
            photo: photoUrl.url,
        });

        res.status(201).json({
            message: 'Pet adicionado na lista de adoção!',
            success: true,
            data: newPet,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something is wrong, i can feel it' });
    }
});

export default router;
