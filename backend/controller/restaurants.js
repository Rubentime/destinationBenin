const Restaurants = require('../models/restaurants');

exports.ajouterrestaurants = (req, res, next) => {
    delete req.body._id;
    const restaurants = new Restaurants({
      ...req.body
    });
    restaurants.save()
      .then(() => res.status(201).json({ message: 'restaurants enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Restaurants.findOne({ _id: req.params.id })
        .then(restaurants => res.status(200).json({ restaurants }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Restaurants.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Restaurants.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'restaurants modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Restaurants.deleteOne({_id: req.params.id})
      .then(restaurants => res.status(200).json({message:"restaurants suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };