const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const partenaireCtrl = require('../controller/partenaires');

router.post('/',  partenaireCtrl.ajouterpartenaire);

router.put('/:id',  partenaireCtrl.modifier);

router.get('/',  partenaireCtrl.recupall);

router.delete('/:id',  partenaireCtrl.supprimer);

router.get('/:id',  partenaireCtrl.recupone);

module.exports  = router;
