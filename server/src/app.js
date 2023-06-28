import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import usersRoutes from "./routes/users.route.js";
import authRoutes from "./routes/auth.js";
import petsRoutes from "./routes/pets.js";
import passwordResetRoutes from "./routes/passwordReset.js";
import sendUserEmailRoutes from "./routes/sendUserEmail.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/pets", petsRoutes);
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/send-email", sendUserEmailRoutes);

app.get("/", async (req, res) => {
  res.json({
    rotas: {
      pets: "/api/pets",
    },
  });
});

export default app;
