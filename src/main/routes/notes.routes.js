import express from 'express';
import { getUserNotes, createNote } from '../controllers/notes.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authenticate, getUserNotes);
router.post('/', authenticate, createNote);

export default router;
