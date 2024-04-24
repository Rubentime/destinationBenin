const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, 
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: Number, required: true }
});

module.exports = mongoose.model('admin',adminSchema);
