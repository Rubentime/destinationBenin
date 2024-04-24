const Transaction = require('../models/transaction');

exports.ajoutertransaction = (req, res, next) => {
    delete req.body._id;
    const transaction = new Transaction({
      ...req.body
    });
    transaction.save()
      .then(() => res.status(201).json({ message: 'transaction enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    transaction.findOne({ _id: req.params.id })
        .then(transaction => res.status(200).json({ transaction }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Transaction.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Transaction.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'transaction modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Transaction.deleteOne({_id: req.params.id})
      .then(transaction => res.status(200).json({message:"transaction suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };