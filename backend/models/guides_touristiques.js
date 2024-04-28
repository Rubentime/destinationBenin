const mongoose = require('mongoose');
 const uniqueValidator = require('mongoose-unique-validator');

const guidesSchema = mongoose.Schema({
  user_id: { type: String, unique: true, required:true }, 
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  adresse: { type: String, required: true },
  telephone: { type: Number, required: true },
  langues_parles: { type: [String], required: true },
  experience: { type: Number, required: true },
  site_touristique_concerner: { type: String, required: true }
});
guidesSchema.plugin(uniqueValidator);
module.exports = mongoose.model('guides',guidesSchema);
