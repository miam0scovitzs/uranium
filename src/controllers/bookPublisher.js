const res = require("express/lib/response")
const authorModel = require("../assaignment14/author")
const bookModel= require("../assaignment14/books")
const publisherModel = require("../assaignment14/publisher")


const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({msg: authorCreated})
}
const createpublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({msg: publisherCreated}) 
   }



    const createBook = async function (req, res) {
        let data = req.body
        let auth_check=  await authorModel.find({_id:data.author}).select("_id")
        let publisher_check = await publisherModel.find({_id:data.publisher}).select("_id")
     if(!auth_check.length && !publisher_check.length)
     res.send({msg:"author and publisher dont exist"})
    
     else if(!auth_check.length && publisher_check.length)
     res.send({msg:"author id doesnot exists"})
    
    else if(auth_check.length && !publisher_check.length)
     res.send({msg:"publisher doesnot exists"})
     else{
    
     if(!await bookModel.exists(req.body)){
     let savebook = await bookModel.create(req.body)
     res.send({msg:savebook})
      } else res.send({msg:"book exists"})
     }
    }
    
    const findBook = async (req,res)=>{
        let alldata =await bookModel.find().populate(['author','publisher'])
        res.send({msg:alldata})}

        const updateBook = async (req,res) => {
            // let find_PId = (await publisherModel.findOne({name: req.body.publisher}).select('_id'))._id.valueOf()
            // console.log(find_PId) //The above 55 line will return the value of the object string and we can check that in 57 to get the same result
            let find_PId = await publisherModel.findOne({name: req.body.publisher}).select('_id')
            let data = await bookModel.updateMany(
                                                {publisher: find_PId},
                                                {$set: {isHardCover: true}}
                                                )
            res.send({msg: data})
        }
        
        const updateBookPrice = async (req,res) => {
            let data = await bookModel.updateMany(
                                                 {ratings: {$gt: 3.5}},
                                                {$inc: {price: 1000}}                           
        //   let arr =[];
        //   for(let i=0;i<data.length;i++) {
        //       arr[i]=await bookModel.updateMany({book:data[i]._id},{$inc:{price:1000}})
            )

                                                
            res.send({msg: data})
            };
        


module.exports.createBook=createBook
module.exports.createAuthor=createAuthor
module.exports.createpublisher=createpublisher
module.exports.findBook=findBook
module.exports.updateBook=updateBook
module.exports.updateBookPrice=updateBookPrice
