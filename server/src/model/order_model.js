import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const cartSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:'product',required:true},
    quantity:{type:Number,required:true},
    totalPrice:{type:Number,required:true},
    cartDate:{type:Date,default:Date.now},
    status:{type:String,enum:['pending','shipped','delivered','cancelled'],default:'pending'},
},
    {timestamps:true}
)

export const Cart_model = mongoose.model('cart', cartSchema);

