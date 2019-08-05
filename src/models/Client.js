const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    meritalStatus:{type: String, required: true},
    address:{type:String, required: true},
    phoneNumber:{type:Object, required: true}, 
    cpf:{type: String, required: true}
});

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client