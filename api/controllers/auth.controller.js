import { authService } from '../services/auth.services.js';

const signin = (req, res, next) => {
  const { email, password } = req.body;
  authService.signin(email, password)
    .then(({ user, token }) => {
      res.cookie('access_token', token, { httpOnly: true })
      res.status(200).json({ user })
    })
    .catch((err) => {
      next(err);
    })
};

const signup = (req, res, next) => {
  const user = req.body;
  authService.signup(user)
    .then((response) => {
      res.status(201).json({ message: 'User created successfully', user: response });
    })
    .catch((err) => {
      next(err)
    })
};

export {
  signin,
  signup
};