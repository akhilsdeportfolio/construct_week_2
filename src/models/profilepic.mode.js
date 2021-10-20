const mongoose = require("mongoose");

let pic = new mongoose.Schema({
     profilePic:{type:String,required:false}
},{versionKey:false,timestamps:true});


let Pictures = mongoose.model("pic",pic);


module.exports= Pictures;

