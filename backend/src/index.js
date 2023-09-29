// Este archivo la configuración del servidor y lo inicia.

const app = require('./app');

// Arrancamos el servidor usando una función asíncrona
async function main() {
    await app.listen(4000);
    console.log('Servidor ejecutandose en el puerto 4000');
}

// Llamamos la función.
main();
