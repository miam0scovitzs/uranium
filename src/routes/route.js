const express = require('express');
// // const logger = require('./logger')
// const json = require(./json)
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });
// router.get('/candidates', function (req, res) {
  // console.log('------------------')
  // console.log(req)
  // console.log('------------------')
  // console.log('These are the request query parameters: ', req.query)
  // res.send('My first ever api!')
// });

// const arr =[1,2,3,4,5,6,7,8,9];

// router.get('/candidates', function (req, res) {
//   const arr1=[];

//   if(req.query.count>0 && req.query.count<=10){
// for(let i=0;i<=req.query.count;i++){
//   arr1.push(arr[i])
//     }  
//   }  res.send(arr1)
// }
// );


// const movies =["iron man","thor","black panther","ant man","avengers","infinity war","end game"]
// router.get('/movies', function(req, res){
//  res.send(movies)
// });

// router.get('/movies/:indexNumber', function(req, res){
//   let i =req.params.indexNumber
//    res.send((i>0 && i<=movies.length)?movies[i-1]:
//    "invalid request")
// });



// // const arr2= [ {
// //  "id": 1,
// //   "name": "The Shining"
// //  }, {
// //   "id": 2,
// //   "name”: “Incendies"
// //  }, {
// //   "id": 3,
// //   "name”: “Rang de Basanti"
// //  } , {
// //   "id": 4,
// //   "name": "Finding Nemo"
// //  }]
// //  router.get('/flims', function (req, res) {
// //   res.send(arr2)
// //  });


// router.get('/findValue/:indexNumber', function(req, res){
//  const arr =[1,2,3,4,5,7,8,9]
// const findValue =[];
// for(let i in arr){
//   let a= arr[i] -arr[i-1];
//   let dif =1;
//   if(dif<a){
//     findValue.push(arr[i-1] + dif);
//   }
// } res.send(findValue)

// });
//🤞🤞🤞✌             
// const express = require('express');
// const router = express.Router();
// const players = [{
//   name: "manish",
//   dob: "01/01/1995",
//   gender: "male"
// },{
//   name: 'asish',
//   dob: '01/09/1995',
//   gender: 'male',
//   city: 'delhi'
// },{
//   name: 'nirmal',
//   dob: '01/02/1992',
//   gender: 'male',
//   city: 'mumbai',
// }
// ]

// const newName = req.body.name
//     let flag = false
//     for(let i=0; i<players.length; i++){
//         if(players[i].name === newName){
//             flag = true
//             res.send({message: "Player '" + newName + "' already exist in the list"})
//         }
//     }
//     if(!flag){
//     players.push(req.body)
//     res.send(players)
//     }
// });
//router.post('/add-player', log)
   

const nuser =require("../logger")
router.post("/creat",nuser.createuser)
router.get("/get",nuser.geteuser)

module.exports = router;



// adding this comment for no reason