import express from 'express';
import userRoutes from './users.routes.js';
import noteRoutes from './notes.routes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/notes', noteRoutes);

export default router;
