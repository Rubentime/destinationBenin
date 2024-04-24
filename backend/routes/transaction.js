const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const transactionCtrl = require('../controller/transaction');

router.post('/',  transactionCtrl.ajoutertransaction);

router.put('/:id',  transactionCtrl.modifier);

router.get('/',  transactionCtrl.recupall);

router.delete('/:id',  transactionCtrl.supprimer);

router.get('/:id',  transactionCtrl.recupone);

module.exports  = router;
