const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const presidentCtrl = require('../controller/president');

router.post('/',  presidentCtrl.ajouterpresident);

router.put('/:id',  presidentCtrl.modifier);

router.get('/',  presidentCtrl.recupall);

router.delete('/:id',  presidentCtrl.supprimer);

router.get('/:id',  presidentCtrl.recupone);

module.exports  = router;
