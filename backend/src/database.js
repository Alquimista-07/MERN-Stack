// Este archivo continen la configuración de la conexión con la base de datos
// mongoose

const mongoose = require('mongoose');

// Creamos una función que sea la encargada de establecer la conexión
const dbConnection = async() => {

    try {
        
        // la función connect recibe la cadena de conexión proveniente de una variable de entorno.
        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log( 'DB Online!!!...' );

    }
    catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la DB revisar logs');
    }


}

module.exports = {
    dbConnection
}