// Este archivo la configuración del servidor y lo inicia.

const app = require('./app');

// Importamos el archivo de configuración de la base de datos
const { dbConnection } = require('./database');

// Arrancamos el servidor usando una función asíncrona
async function main() {
    await app.listen(app.get('port'));
    console.log('Servidor ejecutandose en el puerto: ' + app.get('port'));
}

// Llamamos la función.
main();

// Base de datos
dbConnection();