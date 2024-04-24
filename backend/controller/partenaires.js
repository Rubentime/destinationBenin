const Partenaire = require('../models/partenaires');

exports.ajouterpartenaire = (req, res, next) => {
    delete req.body._id;
    const partenaire = new Partenaire({
      ...req.body
    });
    partenaire.save()
      .then(() => res.status(201).json({ message: 'partenaire enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Partenaire.findOne({ _id: req.params.id })
        .then(partenaire => res.status(200).json({ partenaire }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Partenaire.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Partenaire.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'partenaire modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Partenaire.deleteOne({_id: req.params.id})
      .then(partenaire => res.status(200).json({message:"partenaire suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };