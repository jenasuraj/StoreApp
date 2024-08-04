const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const productController = require('./controllers/product');
const app = express();
const port = 7000;

// Setting up Pug as the view engine
app.set('view engine', 'pug');
app.set('views', 'views');

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Log every request
app.use((req, res, next) => {
    console.log(`Middleware: ${req.method} ${req.url}`);
    next();
});

// Mount admin routes at /admin
app.use('/admin', adminData.routes);

// Mount shop routes at /
app.use(shopRoutes);

// 404 error handling middleware
app.use(productController.syeee);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});