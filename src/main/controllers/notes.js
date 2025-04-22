import Note from '../models/Notes.js';

export const getUserNotes = async (req, res) => {
  const notes = await Note.findAll({ where: { userId: req.userId } });
  res.json(notes);
};

export const createNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.create({ title, content, userId: req.userId });
  res.status(201).json(note);
};
