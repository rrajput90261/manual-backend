import mongoose from "mongoose";
import bcrypt from "bcryptjs";
 
const userSchema = new mongoose.Schema({
    profileImg:{},
    firstName:{},
    lastName:{},
    gender:{},
    email:{},
    role:{},
    orderid:[{}],
    cartId:[{}],
    verification:{
        user:{
            isDeleted:{},
            isVerified:{},
            isBlocked:{},
            reason:{},
            opt:{},
            optATM:{},
            lookTime:{}
        },
        admin:{
            otp:{},
            otpATM:{},

        }
    }, 
    login_info:[{}]
})