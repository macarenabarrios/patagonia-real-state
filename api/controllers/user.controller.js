// import { response } from 'express';
// import { userService } from '../services/user.service.js';

export const test = (req, res, next) => {
  res.json({
    message: 'Hola mundo'
  });
}

/*
const getAll = (req, res, next) => {
  userService.getAll(req.query['page'], req.query['size'],req.query['firstname'],req.query['lastname'],req.query['email']).then((response) =>
    res.status(200).json(response)
  ).catch((err) => {
    next(err)
  });
};

*/