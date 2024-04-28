const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth')

const userCtrl = require('../controller/users');

router.post('/signup',  userCtrl.inscription);
router.post('/login',  userCtrl.connexion);

module.exports = router;
