const mongoose = require('mongoose');
 
const expressionSchema = mongoose.Schema({
    expression: {type: String, require: true},
    langue: {type: String, require: true},
    traduction: {type: String, require: true},
});

module.exports = mongoose.model('expression', expressionSchema);
