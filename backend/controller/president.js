const President = require('../models/president');

exports.ajouterpresident = (req, res, next) => {
    delete req.body._id;
    const president = new President({
      ...req.body
    });
    president.save()
      .then(() => res.status(201).json({ message: 'president enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    President.findOne({ _id: req.params.id })
        .then(president => res.status(200).json({ president }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    President.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    President.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'president modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    President.deleteOne({_id: req.params.id})
      .then(president => res.status(200).json({message:"president suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };