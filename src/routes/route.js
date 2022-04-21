const express = require('express');
const router = express.Router();

const all=require("../controllers/totalController")
const {headerCheck} = require("../middleware/newmw")

router.post("/cUser",headerCheck,all.createUser)
router.post("/cProduct",headerCheck,all.createProduct)
router.post("/cPurchase",headerCheck,all.createPurchase)



// router.get('/test',function(req,res){
//     res.send("hello")
// }),

// router.get('/use-it',function(req,res){
//     res.send("hey this is")
// });
// router.get('/use',function(req,res){
//     res.send("hey this is")
// });
// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
// const data=require("../controllers/studentcontroller")


// router.post("/createbatch",data.createBatch)
// router.post("/createdev",data.createdeveloper)
// router.get("/fbook",data.fbook)
// router.get("/scholarship_develope",data.scholarship_developer)
// router.get("/developer",data.devloper)
// router.post("/createbooks",all.createBook)
// router.post("/createauthors",all.createAuthor)
// router.post("/createpublisher",all.createpublisher)
// router.get("/findbook",all.findBook)
// router.put("/updateBookPrice",all.updateBook)

module.exports = router;