import bcrypt from "bcrypt";
import UserSchema from "../models/user.js";

export const createUserService = async (res, error, user) => {
  const { username, phoneNumber, email, password, confirmPassword } = user;

  if (error) {
    if (error.details[0].type === "passwordComplexity.numeric") {
      return res.status(400).json({
        message: "A senha deve conter pelo menos um número!",
        success: false,
      });
    }

    if (
      error.details[0].type === "passwordComplexity.uppercase" ||
      error.details[0].type === "passwordComplexity.lowercase"
    ) {
      return res.status(400).json({
        message: "A senha deve conter caracteres maiúsculos e minúsculos!",
        success: false,
      });
    }

    if (error.details[0].type === "passwordComplexity.symbol") {
      return res.status(400).json({
        message: "A senha deve conter pelo menos um caracter especial!",
        success: false,
      });
    }
  }

  if (password !== confirmPassword)
    return res.status(400).json({
      message: "As senhas não coincidem!",
      success: false,
    });

  const existingUser = await UserSchema.findOne({ email: email });

  if (existingUser) {
    return res.status(409).json({
      message: "Um usuário com esse email já foi criado!",
      success: false,
    });
  }

  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashPassword = await bcrypt.hash(password, salt);

  await UserSchema.create({
    username,
    phoneNumber,
    email,
    password: hashPassword,
  });

  return res.status(201).json({
    success: true,
    message: "Você se cadastrou com sucesso!",
  });
};
