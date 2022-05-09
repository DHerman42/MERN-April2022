const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products', ProductController.createNewProduct);
    app.get('/api/products/:_id', ProductController.findOneProduct);
    app.put('/api/products/:_id', ProductController.updateProduct);
    app.delete('/api/products/:_id', ProductController.deleteProduct);
}