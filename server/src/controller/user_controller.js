import {errorhandling} from '../error/all_error.js'

export const create_user = async(req,res)=>{
    try{
        res.send({a:"abc"})
    }
    catch(err){errorhandling(err,res)}
}

