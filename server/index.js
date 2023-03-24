import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// função para conectar ao banco de dados do mongo
import connectDB from './mongodb/connect.js';

// importação das rotas
import usersRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);

app.get('/', async (req, res) => {
    res.send('teste');
});

// função para iniciar o servidor do backend
const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () =>
            console.log(
                '🟢 Servidor iniciado na porta http://localhost:8080 🟢'
            )
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
