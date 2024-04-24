const mongoose = require('mongoose');
 
const langues = ['Goun', 'Français', 'Fon', 'adja'];

const guidesSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, 
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: Number, required: true },
  langues_parles: { type: String, enum: langues,required: true },
  experience: { type: Number, required: true },
  site_touristique_concerner: { type: String, required: true }
});

module.exports = mongoose.model('guides',guidesSchema);
