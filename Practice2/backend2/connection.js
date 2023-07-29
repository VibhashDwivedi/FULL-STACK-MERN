const mongoose = require('mongoose');
const url = 'mongodb+srv://vibhashdwivedi:root@cluster0.js7w6aj.mongodb.net/mydb?retryWrites=true&w=majority';

mongoose.connect(url)
.then((result) => {
   console.log('connected yo mongodb'); 
}).catch((err) => {
    console.log(err);
    
});
console.log('Started');
module.exports=mongoose;