// config.ts

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

/**
 * Crea una instancia de Sequelize para conectar a la base de datos PostgreSQL.
 * Utiliza las variables de entorno para configurar la conexión.
 * En caso de no estar definidas, se utilizan valores predeterminados.
 */
const sequelize = new Sequelize(
  process.env.DB_NAME || 'persona',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || '1346', {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    dialect: 'postgres',
}
);

/**
 * Prueba la conexión con la base de datos.
 * Registra un mensaje de éxito o error en la consola.
 */
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
  }
};

// Exporta la función testConnection y la instancia de Sequelize.
export { testConnection };
export default sequelize;
