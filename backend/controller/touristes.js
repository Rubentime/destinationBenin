const Touristes = require('../models/touristes');

exports.ajoutertouristes = (req, res, next) => {
    delete req.body._id;
    const touristes = new Touristes({
      ...req.body
    });
    touristes.save()
      .then(() => res.status(201).json({ message: 'touristes enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Touristes.findOne({ _id: req.params.id })
        .then(touristes => res.status(200).json({ touristes }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Touristes.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Touristes.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'touristes modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Touristes.deleteOne({_id: req.params.id})
      .then(touristes => res.status(200).json({message:"touristes suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };