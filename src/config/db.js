const mongoose = require("mongoose");


let connect =()=>{

     return mongoose.connect("mongodb+srv://admin123:admin123@cluster0.ci44m.mongodb.net/nordman?retryWrites=true&w=majority");
}

module.exports=connect;