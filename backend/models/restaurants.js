const mongoose = require('mongoose');
 
const restaurantSchema = mongoose.Schema({
    nom: {type: String, require: true},
    adresse: {type: String, require: true},
    contact: {type: String, require: true},
    partenaire_id: { type: mongoose.Schema.Types.ObjectId, ref: 'partenaires', required: true }, 
    menu: {type: String, require: true},
    ville: {type: String, require: true},
    horaire_douverture: {type: String, required: true},
    horaire_de_fermerture: {type: String, required: true},
    images: {type: String, required: true},
});

module.exports = mongoose.model('restaurant', restaurantSchema);
