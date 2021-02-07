const costCenterModel = require('./../Model/cost-center');

module.exports = app => {
    const constCenterController = {};

    constCenterController.createCostCenter = async (req, res, next) => {

        await costCenterModel.create(req.body)
            .then(function (item) {
                res.status(200).json(item);
                next();
                console.log(item); //Item gravado
            }).catch(function (err) {
                res.status(400).json(err);
                next();
                console.log(err); //Erro ao gravar
            });

    };

    constCenterController.findAllCostCenter = async (req, res, next) => {

        await costCenterModel.findAll()
            .then(function (item) {
                res.status(200).json(item);
                next();
                console.log(item); //Item gravado
            }).catch(function (err) {
                res.status(400).json(err);
                next();
                console.log(err); //Erro ao gravar
            });

    }

    constCenterController.updateCostCenter = async (req, res, next) => {

        const itemCostCenter = await itemCostCenter.findByPk(req.params.id);

        if (!!req.body) {
            itemCostCenter.description = !!req.body && !!req.body.description ? req.body.description : itemCostCenter.description;
            itemCostCenter.responsible = !!req.body && !!req.body.responsible ? req.body.responsible : itemCostCenter.responsible;
            itemCostCenter.operator = !!req.body && !!req.body.operator ? req.body.operator : itemCostCenter.operator;
        };

        await itemCostCenter.save(itemCostCenter)
            .then(function (item) {
                res.status(200).json(item);
                next();
                console.log(item); //Item gravado
            }).catch(function (err) {
                res.status(400).json(err);
                next();
                console.log(err); //Erro ao gravar
            });

    }

    constCenterController.deleteCostCenter = async (req, res, next) => {

        costCenterModel.destroy({ where: { id: req.params.id } })
            .then(function (item) {
                res.status(200).json(item);
                next();
                console.log(item); //Item gravado
            }).catch(function (err) {
                res.status(400).json(err);
                next();
                console.log(err); //Erro ao gravar
            });

    }

    return constCenterController;
}