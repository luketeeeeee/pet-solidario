import app from "./app.js";
import * as dotenv from "dotenv";
import connectDB from "./utils/connect.js";

dotenv.config();

const url = process.env.BASE_URL;
const port = process.env.PORT;

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log(`🟢 Servidor iniciado na porta ${url} 🟢`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
