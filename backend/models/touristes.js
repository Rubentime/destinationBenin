const mongoose = require('mongoose');
 
const genres = ['masculin', 'féminin', 'transgenre'];

const touristesSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, 
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: Number, required: true },
  genre: { type: String, enum: genres, required: true },
  nationalite: { type: String, required: true },
  contact_en_cas_durgence: { type: String, required: true }
});

module.exports = mongoose.model('touristes',touristesSchema);
