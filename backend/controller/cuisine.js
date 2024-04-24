const Cuisine = require('../models/cuisine');

exports.ajoutercuisine = (req, res, next) => {
    delete req.body._id;
    const cuisine = new Cuisine({
      ...req.body
    });
    cuisine.save()
      .then(() => res.status(201).json({ message: 'cuisine enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Cuisine.findOne({ _id: req.params.id })
        .then(cuisine => res.status(200).json({ cuisine }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Cuisine.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Cuisine.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'cuisine modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Cuisine.deleteOne({_id: req.params.id})
      .then(cuisine => res.status(200).json({message:"cuisine suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };