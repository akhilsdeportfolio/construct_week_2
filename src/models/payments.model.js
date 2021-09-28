const mongoose = require("mongoose");


let paymentSchema = new mongoose.Schema({
     user_id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"},
     payment_type:{type:String,required:true},
     payment_format:{type:String,required:true}
});


let Payments = mongoose.model("payment",paymentSchema);


module.exports=Payments;


