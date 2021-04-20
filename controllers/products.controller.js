const productModel = require('../models/products.model');


const createProduct = (req, res) => {
    // const data = req.body;
    const {id, productName, productCategory, isActive, details} = req.body;
   console.log(req.body)
    if (productName.length < 0) {
        
        return res.json({"error": "eroor"})
    }
    const product = new productModel({
        id: id,
        productName: productName,
        productCategory: productCategory,
        isActive: isActive,
        details: details
    });
    product.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": product})
    });


}
const getByPrice = (req, res) => {
    productModel.find({"details.price":{$gte:50, $lte:100}}).then((products) => {
        return res.send(products)
    });
}
const getByActive = (req, res) => {
    const {id} = req.params;
    productModel.find({isActive:true}).then((products) => {
        return res.send(products)
    });
}
const findById = (req, res) => {
    const {id} = req.params;
    productModel.findOne({id:id}).then((product) => {
        return res.send(product)
    });
}
const getProducts = (req, res) => {
    productModel.find({}).then((products) => {
        return res.send(products)
    });
}

module.exports = {
    create: createProduct,
    getAll: getProducts,
    getId: findById,
    getActive: getByActive,
    getPrice: getByPrice
}
