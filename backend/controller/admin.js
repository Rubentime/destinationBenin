const Admin = require('../models/admin');

exports.ajouteradmin = (req, res, next) => {
    delete req.body._id;
    const admin = new Admin({
      ...req.body
    });
    admin.save()
      .then(() => res.status(201).json({ message: 'admin enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Admin.findOne({ _id: req.params.id })
        .then(admin => res.status(200).json({ admin }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Admin.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Admin.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'admin modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Admin.deleteOne({_id: req.params.id})
      .then(admin => res.status(200).json({message:"admin suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };

  