import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAILER_HOST,
            // service: process.env.MAILER_SERVICE,
            port: process.env.MAILER_PORT,
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

        console.log('🟢 email enviado com sucesso 🟢');
    } catch (error) {
        console.log('🔴 email não foi enviado 🔴');
    }
};

export default sendEmail;
