
const usermodule = require("./abc")

const createUser= async function(req,res){
    let data =req.body
    let save =await usermodule.create(data)
    res.send({msg:save})
}

const geteUser= async function(req,res){
    let  msave =await usermodule.find( )
    res.send({msg:msave})
}
    module.exports.createuser=createUser
    module.exports.geteuser=geteUser
   
