import express from 'express';

import PetSchema from '../mongodb/models/pet.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        const pets = await PetSchema.find({});
        res.status(200).json({ success: true, data: pets });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

router.route('/').post(async (req, res) => {
    try {
        const { name, species, sex, breed, owner } = req.body;

        const newPet = await PetSchema.create({
            name,
            species,
            sex,
            breed,
            owner,
        });

        res.status(201).json({
            message: 'Pet adicionado na lista de adoção!',
            success: true,
            data: newPet,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'something is wrong, i can feel it' });
    }
});

export default router;
