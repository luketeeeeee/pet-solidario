import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAILER_HOST,
            service: process.env.MAILER_SERVICE,
            port: 587,
            secure: true,
            auth: {
                user: process.env.MAILER_USER,
                pass: process.env.MAILER_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        });

        console.log("🟢 email enviado com sucesso 🟢");
    } catch (error) {
        console.log(error);
        console.log("🔴 email não foi enviado 🔴");
    }
};

export const sendUserEmail = async (sender, email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAILER_HOST,
            service: process.env.MAILER_SERVICE,
            port: 587,
            secure: true,
            auth: {
                user: process.env.MAILER_USER,
                pass: process.env.MAILER_PASS,
            },
        });

        await transporter.sendMail({
            from: sender,
            to: email,
            subject: subject,
            text: text,
        });

        console.log("🟢 email enviado com sucesso 🟢");
    } catch (error) {
        console.log(error);
        console.log("🔴 email não foi enviado 🔴");
    }
};
