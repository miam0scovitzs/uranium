const express = require('express');
const logger = require('./logger')

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
});

const arr =[1,2,3,4,5,6,7,8,9];
let arr1=[];
router.get('/candidates', function (req, res) {
  if(req.query.count>0 && req.query.count<=10)
for(i=0;i<=arr.length;i++){
  arr1.push(arr[i])
    } return res.send(arr1)
  }
);


module.exports = router;
// adding this comment for no reason