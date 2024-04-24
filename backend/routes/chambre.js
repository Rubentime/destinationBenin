const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const chambreCtrl = require('../controller/chambre');

router.post('/',  chambreCtrl.ajouterchambre);

router.put('/:id',  chambreCtrl.modifier);

router.get('/',  chambreCtrl.recupall);

router.delete('/:id',  chambreCtrl.supprimer);

router.get('/:id',  chambreCtrl.recupone);

module.exports  = router;
