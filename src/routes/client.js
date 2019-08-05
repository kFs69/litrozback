const express = require('express');
const routerClient = express.Router();

const controllerClient = require('../controllers/controllerClient');

routerClient.post('/register', controllerClient.addClient);
routerClient.put('/update/:id', controllerClient.updateClient);
routerClient.delete('/delete/:id', controllerClient.deleteClient);
routerClient.get('/admin', controllerClient.searchClient);
routerClient.get('/admin/:id', controllerClient.searchOneClient);

module.exports = routerClient