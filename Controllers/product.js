const products = [];

const getAdmin = (req, res) => {

    //const products =this.product.fetchAll();
    res.render('add-product', { pageTitle: 'Add Product' });

};

const postAdmin = (req, res) => {
   products.push({ title: req.body.title });
   //const product = new this.product(rew.body.title);
   //product.save();
    res.redirect('/');
};

const shopOne = (req, res) => {
    res.render('shop', {        
        prods: products,
        pageTitle: 'Crazy Shop' 
    });
};
const syeee =(req, res) => {
    console.log("error section!");
    res.status(404).render('404', { ti: "ERROR!!!", to: "Nikal sale" }); // Ensure you have a 404.pug file in your views folder
};

module.exports = {
    getAdmin,
    postAdmin,
    shopOne,
    syeee,
   
};
