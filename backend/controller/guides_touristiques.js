const Guides = require('../models/guides_touristiques');

exports.ajouterguides = (req, res, next) => {
    delete req.body._id;
    const guides = new Guides({
      ...req.body
    });
    guides.save()
      .then(() => res.status(201).json({ message: 'guides enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Guides.findOne({ _id: req.params.id })
        .then(guides => res.status(200).json({ guides }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Guides.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Guides.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'guides modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Guides.deleteOne({_id: req.params.id})
      .then(guides => res.status(200).json({message:"guides suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };