import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config(); // Carga las variables de entorno desde tu archivo .env

const app = express(); // Crea una nueva instancia de tu servidor Express

app.use(cors());          // Middleware 1 Habilita que tu backend acepte peticiones desde otros dominios
app.use(express.json());  // Middleware 2 Habilita Express para que pueda leer y entender el body en formato JSON, que es lo que se envía desde tu formulario
app.use('/users', userRoutes); // Middleware 3 (rutas) Asocia el prefijo /users con las rutas que creaste en userRoutes.js (POST /users y GET /users)

const PORT = process.env.PORT || 3000; // process.env.PORT como se manda a llamar la variable de entorno PORT

mongoose.connect(process.env.MONGO_URI) //  Intenta conectarse a tu base de datos MongoDB
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`); //Si se conecta correctamente a MongoDB, inicia el servidor en el puerto definido
    });
  })
  .catch((error) => {
    console.error('Error conectando a MongoDB:', error.message); // Si la conexión a Mongo falla, muestra un mensaje de error
  });
