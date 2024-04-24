const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const expressionCtrl = require('../controller/expression');

router.post('/',  expressionCtrl.ajouterexpression);

router.put('/:id',  expressionCtrl.modifier);

router.get('/',  expressionCtrl.recupall);

router.delete('/:id',  expressionCtrl.supprimer);

router.get('/:id',  expressionCtrl.recupone);

module.exports  = router;
