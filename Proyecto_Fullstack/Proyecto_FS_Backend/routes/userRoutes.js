import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// POST /users
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body); // Crea nuevo usuario desde el JSON enviado del Front
    await newUser.save();  // Lo guarda en MongoDB
    res.status(201).json({ message: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Busca todos los usuarios en MongoDB
    res.json(users); // Devuelve la lista en formato JSON al frontend
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
