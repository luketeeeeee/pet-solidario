import { createUserService } from "../services/users.services.js";
import validateSignUp from "../utils/validateSignUp.js";

export const createUser = async (req, res) => {
  try {
    const { username, phoneNumber, email, password, confirmPassword } = req.body;
    const { error } = validateSignUp(req.body);

    return createUserService(res, error, {
      username,
      phoneNumber,
      email,
      password,
      confirmPassword,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something is wrong, i can feel it",
    });
  }
};
