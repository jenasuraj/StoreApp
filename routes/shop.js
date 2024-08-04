/*const express = require('express');
const router = express.Router();
const path= require('path');

router.get('/', (req, res) => {
   // res.send('<h1>I am in shop</h1>');
 //  res.sendFile('./views/shop.html');   {conncection to html page} this is wrong because it gives only on system , not inluded on server stuff

//to make  a path use --dirname which uses join to concat the address
res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));


});
module.exports = router; */


const express = require('express');
const router = express.Router();
const adminData = require('./admin');
const productController = require('../controllers/product');

// GET request for shop
router.get('/', productController.shopOne);

module.exports = router;
