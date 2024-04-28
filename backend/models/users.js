const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const role = ["Administrateur", "Guides", "Touristes"]
const authSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    mdp: {type: String, required: true},
    role: {type: String, enum: role, required:true}
});
authSchema.plugin(uniqueValidator);

module.exports = mongoose.model('auth', authSchema);
