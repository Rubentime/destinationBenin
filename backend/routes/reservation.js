const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const reservationCtrl = require('../controller/reservation');

router.post('/',  reservationCtrl.ajouterreservation);

router.put('/:id',  reservationCtrl.modifier);

router.get('/',  reservationCtrl.recupall);

router.delete('/:id',  reservationCtrl.supprimer);

router.get('/:id',  reservationCtrl.recupone);

module.exports  = router;
