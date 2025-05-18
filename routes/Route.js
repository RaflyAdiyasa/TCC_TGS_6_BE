import express from "express";
import * as NoteController from "../controller/NoteController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/Note', verifyToken, NoteController.getNotes);
router.get('/Note/:id', verifyToken, NoteController.getNoteById);
router.post('/Note', verifyToken, NoteController.createNote);
router.patch('/Note/:id', verifyToken, NoteController.updateNote);
router.delete('/Note/:id', verifyToken, NoteController.deleteNote);

export default router;