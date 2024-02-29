import mongoose from 'mongoose';
const { Schema } = mongoose;

// Definición del esquema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

// Creación del modelo
const User = mongoose.model('User', userSchema);

export default User;