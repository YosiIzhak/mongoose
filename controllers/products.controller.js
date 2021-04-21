const productModel = require('../models/products.model');


const createProduct = (req, res) => {
    // const data = req.body;
    const { id, productName, productCategory, isActive, details } = req.body;
    console.log(req.body)
    if (productName.length < 0) {

        return res.json({ "error": "eroor" })
    }
    const product = new productModel({
        id: id,
        productName: productName,
        productCategory: productCategory,
        isActive: isActive,
        details: details
    });
    product.save((err) => {
        if (err) return res.json({ "error": err })
        return res.json({ "success": product })
    });


}
const getByPrice = async (req, res) => {
    try {
        const products = await productModel.find({ "details.price": { $gte: 50, $lte: 100 } })
        return res.send(products)
    }
    catch (e) {
        return res.status(200).send(e)
    }
    // productModel.find({"details.price":{$gte:50, $lte:100}}).then((products) => {
    //     return res.send(products)
    // });
}
const getByActive = async (req, res) => {
    const { id } = req.params;
    try {
        const products = await productModel.find({ isActive: true })
        return res.send(products)
    }
    catch (e) {
        return res.status(200).send(e)
    }
    // productModel.find({isActive:true}).then((products) => {
    //     return res.send(products)
    // });
}
const findById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productModel.findOne({ id: id })
        return res.send(product)
    }
    catch (e) {
        return res.status(200).send(e)
    }
    // productModel.findOne({id:id}).then((product) => {
    //     return res.send(product)
    // });
}
const updateById = async (req, res) => {
    const { id } = req.params;
    const {isActive} = req.body;
    try {
        const product = await productModel.findOneAndUpdate({id:id},{isActive:isActive }, {new: true})
        return res.send(product)
    }
    catch (e) {
        return res.status(200).send(e)
    }
    // productModel.findOne({id:id}).then((product) => {
    //     return res.send(product)
    // });
}
const deleteById = async (req, res) => {
    const { id } = req.params;
   
    try {
        const product = await productModel.findOneAndDelete({id:id})
        return res.send(product)
    }
    catch (e) {
        return res.status(200).send(e)
    }
    // productModel.findOne({id:id}).then((product) => {
    //     return res.send(product)
    // });
}
const getProducts = async (req, res) => {
    try {
        const products = await productModel.find({})
        return res.send(products)
    }
    catch (e) {
        return res.status(200).send(e)
    }
    // productModel.find({}).then((products) => {
    //     return res.send(products)
    // });
}

module.exports = {
    create: createProduct,
    getAll: getProducts,
    getId: findById,
    getActive: getByActive,
    getPrice: getByPrice,
    updateId: updateById,
    deleteId: deleteById
}
