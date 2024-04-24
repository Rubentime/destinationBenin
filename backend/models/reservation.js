const mongoose = require('mongoose');
 
const reservationSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, 
    date_de_réservation: {type: Date, required: true},
    date_de_début: {type: Date, required: true},
    date_de_fin: {type: Date, required: true},
    contenu: {type: String, required: true},
});

module.exports = mongoose.model('reservation', reservationSchema);
