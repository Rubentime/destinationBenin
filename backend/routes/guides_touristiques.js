const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const guidesCtrl = require('../controller/guides_touristiques');

router.post('/',  guidesCtrl.ajouterguides);

router.put('/:id',  guidesCtrl.modifier);

router.get('/',  guidesCtrl.recupall);

router.delete('/:id',  guidesCtrl.supprimer);

router.get('/:id',  guidesCtrl.recupone);

module.exports  = router;
