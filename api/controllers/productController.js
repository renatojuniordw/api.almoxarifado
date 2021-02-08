const productModel = require('./../Model/product');

module.exports = app => {
    const controllerProduct = {};

    controllerProduct.createProduct = async (req, res, next) => {

        await productModel.create(req.body)
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    };

    controllerProduct.findAllProduct = async (req, res, next) => {

        await productModel.findAll()
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    controllerProduct.updateProduct= async (req, res, next) => {

        const itemProduct = await productModel.findByPk(req.params.id);

        if (!!req.body) {
            itemProduct.description = !!req.body && !!req.body.description ? req.body.description : itemProduct.description;
            itemProduct.amount = !!req.body && !!req.body.amount ? req.body.amount : itemProduct.amount;
            itemProduct.operator = !!req.body && !!req.body.operator ? req.body.operator : itemProduct.operator;
            itemProduct.name = !!req.body && !!req.body.name ? req.body.name : itemProduct.name;
        };

        await itemProduct.save(itemProduct)
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    controllerProduct.deleteProduct = async (req, res, next) => {

        productModel.destroy({ where: { id: req.params.id } })
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    return controllerProduct;
}