const costCenterModel = require('./../Model/cost-center');

module.exports = app => {
    const constCenterController = {};

    constCenterController.createCostCenter = async (req, res, next) => {

        await costCenterModel.create(req.body)
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    };

    constCenterController.findAllCostCenter = async (req, res, next) => {

        await costCenterModel.findAll()
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    constCenterController.updateCostCenter = async (req, res, next) => {

        const _itemCostCenter = await costCenterModel.findByPk(req.params.id);

        if (!!req.body) {
            _itemCostCenter.name = !!req.body && !!req.body.name ? req.body.name : itemCostCenter.name;
            _itemCostCenter.description = !!req.body && !!req.body.description ? req.body.description : itemCostCenter.description;
            _itemCostCenter.responsible = !!req.body && !!req.body.responsible ? req.body.responsible : itemCostCenter.responsible;
            _itemCostCenter.operator = !!req.body && !!req.body.operator ? req.body.operator : itemCostCenter.operator;
        };

        await _itemCostCenter.save(_itemCostCenter).then(function (item) {
            res.status(200).json(item);
            next();
        }).catch(function (err) {
            res.status(400).json(err);
            next();
        });

    }

    constCenterController.deleteCostCenter = async (req, res, next) => {

        costCenterModel.destroy({ where: { id: req.params.id } })
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    return constCenterController;
}