const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const adminCtrl = require('../controller/admin');

router.post('/',  adminCtrl.ajouteradmin);

router.put('/:id',  adminCtrl.modifier);

router.get('/',  adminCtrl.recupall);

router.delete('/:id',  adminCtrl.supprimer);

router.get('/:id',  adminCtrl.recupone);

module.exports  = router;
