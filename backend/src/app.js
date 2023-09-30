// Este archivo contiene solo la definición del servidor usando el framework de express
const express = require('express');
const app = express();

// Para congigurar las variables de entorno configuramos usando el paquete dotenv.
require('dotenv').config();

// Ahora para los CORS (Cross Domain) es necesario realizar la siguiente importación
const cors = require('cors');

//----------------------------------
// Settings
//----------------------------------
app.set('port', process.env.PORT || 3000);

//----------------------------------
// Middlewares
//----------------------------------
// Estos son funciones que se ejecutan antes de las rutas y sirven por ejemplo para realizar validaciones previas
app.use( cors() );

// Para poder realizar lectura y parseo del body en formato JSON
app.use( express.json() );

//----------------------------------
// Routes
//----------------------------------
app.get('/api/users', (req, res) => res.send('Users Routes'));
app.get('/api/notes', (req, res) => res.send('Notes Routes'));

module.exports = app;