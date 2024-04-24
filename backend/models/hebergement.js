const mongoose = require('mongoose');
 
const hebergementSchema = mongoose.Schema({
    nom: {type: String, require: true},
    adresse: {type: String, require: true},
    type_hebergements: {type: String, require: true},
    contact: {type: String, require: true},
    ville: {type: String, require: true},
    partenaire_id: { type: mongoose.Schema.Types.ObjectId, ref: 'partenaires', required: true }, 
    horaire_douverture: {type: String, required: true},
    horaire_de_fermerture: {type: String, required: true},
    images: {type: String, required: true},
});

module.exports = mongoose.model('hebergement', hebergementSchema);
