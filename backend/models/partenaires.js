const mongoose = require('mongoose');
 
const type = ['Restaurant', 'Hébergements'];

const partenaireSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, 
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: Number, required: true },
  nom_de_la_compagnie: { type: String, required: true },
  type_de_compagnie: { type: String, enum: type,required: true }
});

module.exports = mongoose.model('partenaire',partenaireSchema);
