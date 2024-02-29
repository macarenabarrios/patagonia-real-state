import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import customError from '../middlewares/customError.middleware.js';
import jwt from 'jsonwebtoken';

const generateToken = async (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  )
};

const signin = async (email, password) => {
  try {
    const validUser = await User.findOne({
      email
    });
    if (!validUser) throw customError(404, 'User not found');
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) throw customError(404, 'Wrong credentials!');
    const token = await generateToken(validUser);
    const { password: pass, ...rest } = validUser._doc;
    return { user: rest, token };
  } catch (error) {
    throw error;
  }
};

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
  signin,
  signup
};