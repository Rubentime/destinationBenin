const Evenement = require('../models/evenement');

exports.ajouterevenement = (req, res, next) => {
    delete req.body._id;
    const evenement = new Evenement({
      ...req.body
    });
    evenement.save()
      .then(() => res.status(201).json({ message: 'evenement enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Evenement.findOne({ _id: req.params.id })
        .then(evenement => res.status(200).json({ evenement }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Evenement.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Evenement.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'evenement modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Evenement.deleteOne({_id: req.params.id})
      .then(evenement => res.status(200).json({message:"evenement suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };