const express = require('express');
const morgan = require('morgan');

const { database } = require('./config');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/almacen', require('./rutas/areas'));


app.listen(app.get('port'), () => {
    console.log(`Servidor en linea con el puerto ${app.get('port')}`);
  });
