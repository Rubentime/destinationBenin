const Chambre = require('../models/chambre');

exports.ajouterchambre = (req, res, next) => {
    delete req.body._id;
    const chambre = new Chambre({
      ...req.body
    });
    chambre.save()
      .then(() => res.status(201).json({ message: 'chambre enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Chambre.findOne({ _id: req.params.id })
        .then(chambre => res.status(200).json({ chambre }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Chambre.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Chambre.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'chambre modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Chambre.deleteOne({_id: req.params.id})
      .then(chambre => res.status(200).json({message:"chambre suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };