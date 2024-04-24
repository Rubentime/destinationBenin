const Destination = require('../models/destination');

exports.ajouterdestination = (req, res, next) => {
    delete req.body._id;
    const destination = new Destination({
      ...req.body
    });
    destination.save()
      .then(() => res.status(201).json({ message: 'destination enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Destination.findOne({ _id: req.params.id })
        .then(destination => res.status(200).json({ destination }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Destination.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Destination.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'destination modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Destination.deleteOne({_id: req.params.id})
      .then(destination => res.status(200).json({message:"destination suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };