const {model, Schema} = require('../connection');

const myschema= new Schema({
name:String,
email:String,
password:String,
abe:Number
});

module.exports= model('myuser',myschema);