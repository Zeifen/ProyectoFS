import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Crear nuevo usuario (POST /users)
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body); // Crea nuevo usuario desde el JSON enviado del Front
    await newUser.save(); // Lo guarda en MongoDB
    res.status(201).json({ message: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario', error });
  }
});

// Obtener todos los usuarios (GET /users)
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
});

// Actualizar un usuario (PUT /users/:id)
router.put('/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar usuario', error });
  }
});

// Eliminar un usuario (DELETE /users/:id)
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuario', error });
  }
});

export default router;
