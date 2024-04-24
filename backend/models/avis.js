const mongoose = require('mongoose');
 
const avisSchema = mongoose.Schema({
  nom: { type: String, required: true },
  lieux: { type: String, required: true },
  date: {type:Date, required: true},
  heure: {type: String, required: true},
  organisateur: {type: String, require: true},
  description: { type: String, required: true },
  contact: { type: String, required: true },
  images: { type: String, required: true }
});

module.exports = mongoose.model('avis',avisSchema);
