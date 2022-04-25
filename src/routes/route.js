const express = require('express');
const { deletedUser } = require('../assaignment jwt/userController');
const router = express.Router();
const userController= require("../assaignment jwt/userController")
const {mw}=require("../middleware1")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


router.post("/users", userController.createUser  )

router.post("/login", userController.login)

//The userId is sent by front end
 router.get("/users/:mobile", userController.getData)

 router.put("/user/:userId",mw, userController.updateUser)
 router.put("/delete/:userId",mw,userController.deletedUser)
//  router.put("/auth/:userId",userController.auth)

module.exports = router;