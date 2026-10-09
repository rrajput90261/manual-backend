import mongoose, { Types } from "mongoose";
import bcrypt from "bcryptjs";
 
const userSchema = new mongoose.Schema({
    profileImg:{type:Object },
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String,required:true,enum:['male','female','other']},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:[{
        state: {type:String,required:true},
        city: {type:Number,required:true},
        pincode:{type:Number,required:true},
        street: {type:String,required:true},
        landmark:{type:String,required:true}
    }],
    isadress:{type:Number,required:true,default:true},
    phone:{type:Number,required:true,unique:true},
    role:{type:String,enum:['user','admin'],required:true},
    orderid:[{type:mongoose.Schema.Types.ObjectId,ref:'order'}],
    cartId:[{type:mongoose.Schema.Types.ObjectId,ref:'cart'}], 
    verification:{
        user:{
            isDeleted:{type:Boolean,default:false},
            isVerified:{type:Boolean,default:false},
            isBlocked:{type:Boolean,default:false},
            reason:{type:Boolean,default:null},
            opt:{type:Number,default:null},
            optATM:{type:Number,default:3},
            lookTime:{type:Date,default:null}
        },
        admin:{
            otp:{type:Number,default:null},
            otpATM:{type:Number,default:3},

        }
    }, 
    login_info:[{logIn_time:Date,deviceName:String,location:Object }]
},
    {timestamps:true}
)

export const User_model = mongoose.model('user',userSchema)