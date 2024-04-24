const mongoose = require('mongoose');
 
const statut = ['En cours', 'Terminé', 'Annulé'];

const transactionSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, 
  montant: { type: String, required: true },
  date_transaction: { type: Date, required: true },
  type_transaction: { type: String, required: true },
  statut: { type: String, enum: statut, required: true },
});

module.exports = mongoose.model('transaction',transactionSchema);
