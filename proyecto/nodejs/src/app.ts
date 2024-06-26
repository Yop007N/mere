// src/app.ts
import express from "express";
import sequelize from "./config/config"; // Importar directamente desde el archivo de configuración
import personRoutes from './routes/personRoutes';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", personRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api`);
});

// Conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log('Connection to the database has been established successfully.'))
  .catch((err: any) => {
    console.error(`Unable to connect to the database: ${err}`);
  });
