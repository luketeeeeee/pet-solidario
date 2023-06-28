import Joi from "joi";
import { sendUserEmail } from "../utils/sendEmail.js";

import express from "express";

const router = express.Router();

router.route("/").get(async (req, res) => {
    try {
        res.status(200).json({
            texto: "deu certo",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something is wrong, i can feel it" });
    }
});

router.route("/").post(async (req, res) => {
    try {
        const { senderEmail, receptorEmail, text } = req.body;
        const schema = Joi.object({ email: Joi.string().email().required() });

        const { error } = schema.validate(req.body);
        if (error) {
            console.log(error.details[0].message);
            return res.status(400).json({
                message: "Insira um email válido!",
                success: false,
            });
        }

        await sendUserEmail(
            senderEmail,
            receptorEmail,
            "Um usuário do Pet Solidário está interessado em um pet que você cadastrou na plataforma",
            text
        );

        res.status(200).json({
            message: "Email enviado com sucesso",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something is wrong, i can feel it" });
    }
});

export default router;
