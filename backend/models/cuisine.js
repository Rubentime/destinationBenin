const mongoose = require('mongoose');
 
const cuisineSchema = mongoose.Schema({
  nom: { type: String, required: true },
  localité: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  methode_de_preparation: { type: String, required: true },
  origine: { type: String, required: true },
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'restaurants', required: false }, 
  images: { type: String, required: true }
});

module.exports = mongoose.model('cuisine',cuisineSchema);
