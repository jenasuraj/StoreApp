 /*const express = require('express');
 const router = express.Router();
 const path = require('path');
 const products = [];

 // GET request for add-product
 router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'add-product.pug'));
 });

 // POST request for add-product
 router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title });
    res.redirect('/'); // Redirect to the shop page after adding the product
 });

 exports.routes = router;
 exports.products = products;*/


 const express = require('express');
 const router = express.Router();
 const productController = require('../controllers/product');
 
 // GET request for add-product
 router.get('/add-product', productController.getAdmin);
 
 // POST request for add-product
 router.post('/add-product', productController.postAdmin);
 
 module.exports = {
     routes: router,
     products: productController.products
 };
 