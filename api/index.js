import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';


import indexRouter from './routes/index.route.js';

dotenv.config();

// Conexión y generación de la base de datos
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((err) => {
    console.log(err);
  })


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

// Middleware para manejar errores 404
app.use((req, res, next) => {
  const err = new Error('Path not Found');
  err.status = 404;
  next(err);
});

export default app;