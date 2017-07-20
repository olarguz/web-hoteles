#!/usr/bin/env node
(function(){
  'use strict';
  const http = require('http');
  const path = require('path');
  const bodyParser = require('body-parser');
  const express = require('express')
  const cors = require('cors')
  const morgan = require('morgan')
  const helmet = require('helmet')
  const routes = require('./routes/index');
  const hotelsApi = require('./routes/hoteles')

  const start = (options) => {
      return new Promise((resolve, reject) => {
          // Se revisa que el repositorio exista. Para asegurar los datos del web service.
          if (!options.repo) {
              reject(new Error('Peligro: No hay un repositorio de conectado a la aplicacion.'))
          }
          // Se revisa el numero del puerto.
          if (!options.port) {
              reject(new Error('Peligro: Debe configurar un puerto para el servidor.'))
          }

          const app = express();
          app.use(morgan('dev'));
          app.use(helmet());
          app.use(cors());
          app.all('/*',cors());
          app.use((err, req, res, next) => {
              reject(new Error('Something went wrong!, err:' + err))
              res.status(500).send('Something went wrong!')
          })
          app.use(express.static(path.join(__dirname, 'public')));
          app.set('view engine', 'jade');
          app.use(bodyParser.json({limit: '10mb'}));
          app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
          app.use('/', routes);
          hotelsApi(app, options)

          // Se arranca de verdad el web service, por el puerto 'options.port'
          const server = app.listen(options.port, () => resolve(server))
      })
  }

  // Se exporta la funcion para que se pueda iniciar el servicio.
  module.exports = Object.assign({}, {start})
})();