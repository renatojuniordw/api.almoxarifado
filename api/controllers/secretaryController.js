const secretaryModel = require('./../Model/secretary');

module.exports = app => {
    const controllerSecretary = {};

    controllerSecretary.createSecretary = async (req, res, next) => {

        await secretaryModel.create(req.body)
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

    controllerSecretary.findAllSecretary = async (req, res, next) => {

        await secretaryModel.findAll()
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

    controllerSecretary.updateSecretary = async (req, res, next) => {

        const itemSecretary = await secretaryModel.findByPk(req.params.id);

        if (!!req.body) {
            itemSecretary.operator = !!req.body && !!req.body.operator ? req.body.operator : itemSecretary.operator;
        };

        await itemSecretary.save(itemSecretary)
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

    controllerSecretary.deleteSecretary = async (req, res, next) => {

        secretaryModel.destroy({ where: { id: req.params.id } })
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

    return controllerSecretary;
}