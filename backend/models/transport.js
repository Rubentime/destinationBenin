const mongoose = require('mongoose');
 
const transportSchema = mongoose.Schema({
  nom_de_la_compagnie: { type: String, required: true },
  type_de_transport: { type: Date, required: true },
  ville_de_disponibilite: { type: String, required: true },
  contact: {type: String, required: true}
});

module.exports = mongoose.model('transport',transportSchema);
