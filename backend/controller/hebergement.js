const Hebergement = require('../models/hebergement');

exports.ajouterhebergement = (req, res, next) => {
    delete req.body._id;
    const hebergement = new Hebergement({
      ...req.body
    });
    hebergement.save()
      .then(() => res.status(201).json({ message: 'hebergement enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Hebergement.findOne({ _id: req.params.id })
        .then(hebergement => res.status(200).json({ hebergement }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Hebergement.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Hebergement.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'hebergement modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Hebergement.deleteOne({_id: req.params.id})
      .then(hebergement => res.status(200).json({message:"hebergement suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };