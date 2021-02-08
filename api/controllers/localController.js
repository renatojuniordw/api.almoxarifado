const localModel = require('./../Model/local');

module.exports = app => {
    const localController = {};

    localController.createLocal = async (req, res, next) => {

        await localModel.create(req.body)
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    };

    localController.findAllLocal = async (req, res, next) => {

        await localModel.findAll()
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    localController.updateLocal = async (req, res, next) => {

        const itemLocal = await localModel.findByPk(req.params.id);

        if (!!req.body) {
            itemLocal.name = !!req.body && !!req.body.name ? req.body.name : itemLocal.name;
            itemLocal.operator = !!req.body && !!req.body.operator ? req.body.operator : itemLocal.operator;
        };

        await itemLocal.save(itemLocal)
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    localController.deleteLocal = async (req, res, next) => {

        localModel.destroy({ where: { id: req.params.id } })
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    return localController;
}