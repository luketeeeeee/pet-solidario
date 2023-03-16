import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send('teste');
});

const startServer = async () => {
    try {
        // aqui entra provavelmente a conexão com o banco de dados
        app.listen(8080, () =>
            console.log('Servidor iniciado na porta http://localhost:8080')
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
