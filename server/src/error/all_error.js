export const errorhandling = (err,res)=>{

    return res.status(500).send({status:false,message:err.massage})

}