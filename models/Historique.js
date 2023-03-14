const mongoose = require ('mongoose');
const {Schema , model} = mongoose ;
const historiqueSchema = new Schema ({
    history : String,
});

module.exports = Historique = model('historique' ,historiqueSchema )