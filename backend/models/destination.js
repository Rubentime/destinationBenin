const mongoose = require('mongoose');
 
const destinationSchema = mongoose.Schema({
    nom: {type: String, require: true},
    localisation: {type: String, require: true},
    desciption: {type: String, require: true},
    type_destination: {type: String, require: true},
    horaire_visite: {type: String, require: true},
    images: {type: String, required: true},
});

module.exports = mongoose.model('destination', destinationSchema);
