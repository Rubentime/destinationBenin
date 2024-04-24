const mongoose = require('mongoose');
 
const chambreSchema = mongoose.Schema({
    nom: {type: String, require: true},
    type: {type: String, require: true},
    prix: {type: String, require: true},
    hebergement_id: { type: mongoose.Schema.Types.ObjectId, ref: 'hebergements', required: true }, 
    disponibilité: {type: String, require: true},
    images: {type: String, required: true},
});

module.exports = mongoose.model('chambre', chambreSchema);
