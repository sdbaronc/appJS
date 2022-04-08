/* jshint esversion: 6 */
/* jshint browser: true */

const express = require('express');
const router = express.Router();

const appController = require('../controllers/appController');

router.get('/', appController.index);
router.get('/index', appController.index);
router.get('/register', appController.register);
router.get('/register/select', appController.registerSelect);
router.get('/registroClientes', appController.registroClientes);
router.get('/listaClientes', appController.listaClientes);
router.get('/registroItems', appController.registroItems);
router.get('/listaItems', appController.listaItems);


router.post('/register/insert', appController.registerInsert);
// router.post('/register/update', appController.registerUpdate);
// router.post('/register/delete', appController.registerDelete);
router.get('/login', appController.login);

module.exports = router;