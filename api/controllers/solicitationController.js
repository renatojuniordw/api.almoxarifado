const solicitatationModel = require('./../Model/solicitation');

module.exports = app => {
    const controller = {};

    controller.createSolicitation = async (req, res, next) => {

        await solicitatationModel.create(req.body)
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

    controller.findAllSolicitation = async (req, res, next) => {

        await solicitatationModel.findAll()
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

    controller.updateSolicitation = async (req, res, next) => {

        const produto = await solicitatationModel.findByPk(req.params.id);

        if (!!req.body) {
            produto.nr_solicitation = !!req.body && !!req.body.nr_solicitation ? req.body.nr_solicitation : produto.nr_solicitation;
            produto.operator = !!req.body && !!req.body.operator ? req.body.operator : produto.operator;
            produto.cpf = !!req.body && !!req.body.cpf ? req.body.cpf : produto.cpf;
        };

        await produto.save(produto)
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

    controller.deleteSolicitation = async (req, res, next) => {

        solicitatationModel.destroy({ where: { id: req.params.id } })
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

    return controller;
}