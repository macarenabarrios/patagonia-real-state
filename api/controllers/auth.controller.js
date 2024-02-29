import { authService } from '../services/auth.services.js';

export const signup = (req, res, next) => {
  const user = req.body;
  authService.signup(user)
    .then((response) => {
      res.status(201).json({ message: 'User created successfully', user: response });
    })
    .catch((err) => {
      next(err)
    })
};
