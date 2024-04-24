const Reservation = require('../models/reservation');

exports.ajouterreservation = (req, res, next) => {
    delete req.body._id;
    const reservation = new Reservation({
      ...req.body
    });
    reservation.save()
      .then(() => res.status(201).json({ message: 'reservation enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Reservation.findOne({ _id: req.params.id })
        .then(reservation => res.status(200).json({ reservation }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Reservation.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Reservation.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'reservation modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Reservation.deleteOne({_id: req.params.id})
      .then(reservation => res.status(200).json({message:"reservation suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };