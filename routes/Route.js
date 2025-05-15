import express from "express";
import * as NoteController from "../controller/NoteController.js";

const router = express.Router();

router.get('/Note', NoteController.getNotes);
router.get('/Note/:id', NoteController.getNoteById);
router.post('/Note', NoteController.createNote);
router.patch('/Note/:id', NoteController.updateNote);
router.delete('/Note/:id', NoteController.deleteNote);

export default router;