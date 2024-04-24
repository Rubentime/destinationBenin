const Expression = require('../models/expressionlocale');

exports.ajouterexpression = (req, res, next) => {
    delete req.body._id;
    const expression = new Expression({
      ...req.body
    });
    expression.save()
      .then(() => res.status(201).json({ message: 'expression enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.recupone = (req, res, next) => {
    Expression.findOne({ _id: req.params.id })
        .then(expression => res.status(200).json({ expression }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Expression.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Expression.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'expression modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Expression.deleteOne({_id: req.params.id})
      .then(expression => res.status(200).json({message:"expression suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };