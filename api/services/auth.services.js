import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

const signup = async (user) => {
  try {
    const { username, email, password } = user;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const authService = {
  signup
};