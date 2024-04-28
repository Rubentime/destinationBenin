const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const guidesCtrl = require('../controller/guides_touristiques');
const guidesesCtrl = require('../controller/reservation');

router.post('/',  authmid.decodeToken, guidesCtrl.ajouterguides);
router.post('/',  authmid.decodeToken, guidesesCtrl.ajouterreservation);

router.put('/:id',  authmid.decodeToken, guidesCtrl.modifier);

router.get('/',  authmid.decodeToken, guidesCtrl.recupall);

router.delete('/:id',  authmid.decodeToken, guidesCtrl.supprimer);

router.get('/:id',  authmid.decodeToken, guidesCtrl.recupone);

module.exports  = router;
