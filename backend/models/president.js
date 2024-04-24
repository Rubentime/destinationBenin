const mongoose = require('mongoose');

const presidentSchema = mongoose.Schema({
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    durée_du_mandat: {type: String, required: true},
    description: {type: Number, required: true},
    réalisation_notables: {type: String, required: true},
});

module.exports = mongoose.model('president', presidentSchema);