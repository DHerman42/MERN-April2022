const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json(allProducts))
        .catch((err) => {
            res.json({message: 'Something went wrong ', error: err})
        });
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then(oneProduct => {
            res.json(oneProduct)
        })
        .catch((err) => {
            res.json({message: 'Something went wrong ', error: err})
        });
}

module.exports.createNewProduct = (req, res) => {
    const {body} = req;
    Product.create(body)
        .then(newProduct => {
            res.json({product: newProduct})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong ', error: err})
        });
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updadedProduct => {
            res.json({product: updadedProduct})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong ', error: err})
        });
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong ', error: err})
        })
}