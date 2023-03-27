import express from 'express';

import PetSchema from '../mongodb/models/pet';

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { name, species, sex, breed, owner } = req.body;

        // validação de erros etc... dar preferência para validação no front
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'something is wrong, i can feel it' });
    }
});
