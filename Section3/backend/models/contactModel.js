const {model, Schema}= require('../connection');

const myschema = new Schema({
   name:String,
   email: String,
   phone: Number,
   subject:String,
   msg:String
});
module.exports = model('contact', myschema);