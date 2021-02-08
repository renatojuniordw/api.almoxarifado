const itemProductModel = require('./../Model/itemProduct');

module.exports = app => {
    const itemProductController = {};

    itemProductController.createItemProduct = async (req, res, next) => {

        await itemProductModel.create(req.body)
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    };

    itemProductController.findAllItemProduct = async (req, res, next) => {

        await itemProductModel.findAll()
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    itemProductController.updateItemProduct = async (req, res, next) => {

        const itemProduct = await itemProductModel.findByPk(req.params.id);

        if (!!req.body) {
            itemProduct.cadum = !!req.body && !!req.body.cadum ? req.body.cadum : itemProduct.cadum;
            itemProduct.description = !!req.body && !!req.body.description ? req.body.description : itemProduct.description;
            itemProduct.amount = !!req.body && !!req.body.amount ? req.body.amount : itemProduct.amount;
            itemProduct.operator = !!req.body && !!req.body.operator ? req.body.amount : itemProduct.amount;
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

    itemProductController.deleteItemProduct = async (req, res, next) => {

        itemProductModel.destroy({ where: { id: req.params.id } })
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    return itemProductController;
}