const express = require('express');
const router = express.Router();

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
const data=require("../controllers/studentcontroller")


router.post("/createbatch",data.createBatch)
router.post("/createdev",data.createdeveloper)
router.get("/fbook",data.fbook)
router.get("/scholarship_develope",data.scholarship_developer)
router.get("/developer",data.devloper)
// router.post("/createbooks",all.createBook)
// router.post("/createauthors",all.createAuthor)
// router.post("/createpublisher",all.createpublisher)
// router.get("/findbook",all.findBook)
// router.put("/updateBookPrice",all.updateBook)

module.exports = router;