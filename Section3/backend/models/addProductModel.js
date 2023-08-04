const {model, Schema}= require('../connection');

const myschema = new Schema({
    product: String,
    company: String,
    deviceName: String,
    rating: Number,
    price:Number,
    image:String
});
module.exports = model('addProduct', myschema);