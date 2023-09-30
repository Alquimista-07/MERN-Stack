// Este archivo la configuración del servidor y lo inicia.

const app = require('./app');

// Para congigurar las variables de entorno configuramos usando el paquete dotenv.
require('dotenv').config();

// Importamos el archivo de configuración de la base de datos
const { dbConnection } = require('./database');

// Arrancamos el servidor usando una función asíncrona
async function main() {
    await app.listen(process.env.PORT);
    console.log('Servidor ejecutandose en el puerto: ' + process.env.PORT);
}

// Llamamos la función.
main();

// Base de datos
dbConnection();