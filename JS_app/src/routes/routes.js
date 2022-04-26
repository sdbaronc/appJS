/* jshint esversion: 6 */
/* jshint browser: true */

const express = require('express');
const router = express.Router();

const appController = require('../controllers/appController');





// /////////////////////////////////////////// Rutas del clinete/////////////////

router.get('/registroClientes', appController.registroClientes);
router.get('/listaClientes', appController.listaClientes);
router.get('/editarClientes', appController.editarClientes);
router.post('/registrarClientes', appController.registrarClientes);

// /////////////////////////////////////////// Rutas del usuario/////////////////
router.get('/register', appController.register);
router.get('/register/select', appController.registerSelect);
router.get('/register', appController.register);
router.get('/menuAdmin', appController.vistaAdmin);
router.get('/register/select', appController.registerSelect);

router.get('/', appController.index);
router.get('/index', appController.index);

// /////////////////////////////////////////// Rutas del inventario/////////////////

router.post('/registrarItem', appController.registrarItem);
router.get('/registroItems', appController.registroItems);
router.get('/listaItems', appController.listaItems);

// /////////////////////////////////////////// Rutas de las ordenes de compra/////////////////

// router.post('/register/update', appController.registerUpdate);
// router.post('/register/delete', appController.registerDelete);
router.get('/login', appController.login);

module.exports = router;