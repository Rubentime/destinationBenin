const Transport = require('../models/transport');

exports.ajoutertransport = (req, res, next) => {
    delete req.body._id;
    const transport = new Transport({
      ...req.body
    });
    transport.save()
      .then(() => res.status(201).json({ message: 'transport enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Transport.findOne({ _id: req.params.id })
        .then(transport => res.status(200).json({ transport }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Transport.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Transport.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'transport modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Transport.deleteOne({_id: req.params.id})
      .then(transport => res.status(200).json({message:"transport suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };