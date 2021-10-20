const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
     first_name : {type :String,required:true},
     last_name : {type:String,required:true},
     email : {type:String,required:true},
     password:{type:String,required:true},
     profilePic:{type:String,required:false}
},{versionKey:false,timestamps:true});


let Users = mongoose.model("user",userSchema);


module.exports= Users;

