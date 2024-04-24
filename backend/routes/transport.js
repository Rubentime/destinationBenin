const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const transportCtrl = require('../controller/transport');

router.post('/',  transportCtrl.ajoutertransport);

router.put('/:id',  transportCtrl.modifier);

router.get('/',  transportCtrl.recupall);

router.delete('/:id',  transportCtrl.supprimer);

router.get('/:id',  transportCtrl.recupone);

module.exports  = router;