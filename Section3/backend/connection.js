const mongoose = require('mongoose');
const url ='mongodb+srv://vibhashdwivedi96:userroot@cluster0.2rpxe7h.mongodb.net/mydatabase?retryWrites=true&w=majority'

//asynchronous function - returns a promise
mongoose.connect(url)
.then((result)=>{
    console.log('Connected to mongodb');
}).catch((err)=>{
     console.log(err);
});


module.exports = mongoose;
