const express = require('express');
const router = express.Router();
const trucCtrl = require('../controller/truc');
const Produit = require('../models/produit');

router.post('/', trucCtrl.ajouterProduits);

router.put('/:id', trucCtrl.modifier);

router.get('/', trucCtrl.recupall);

router.delete('/:id', trucCtrl.supprimer);

router.get('/:id', trucCtrl.recupone);

module.exports  = router;
