import express from 'express';
import  registerUser  from '../controllers/users.js';

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);

export default userRoutes;
