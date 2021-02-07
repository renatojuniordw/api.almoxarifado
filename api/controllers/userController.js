const userModel = require('./../Model/user');

module.exports = app => {
    const controller = {};

    controller.createUser = async (req, res, next) => {

        await userModel.create(req.body)
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

    controller.findAllUser = async (req, res, next) => {

        await userModel.findAll()
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

    controller.updateUser = async (req, res, next) => {

        const itemUser = await userModel.findByPk(req.params.id);

        if (!!req.body) {
            itemUser.cpf = !!req.body && !!req.body.cpf ? req.body.cpf : itemUser.cpf;
            itemUser.name = !!req.body && !!req.body.name ? req.body.name : itemUser.name;
            itemUser.password = !!req.body && !!req.body.password ? req.body.password : itemUser.password;
            itemUser.login = !!req.body && !!req.body.login ? req.body.login : itemUser.login;
            itemUser.email = !!req.body && !!req.body.email ? req.body.email : itemUser.email;
            itemUser.registration = !!req.body && !!req.body.registration ? req.body.registration : itemUser.registration;
            itemUser.phone = !!req.body && !!req.body.phone ? req.body.phone : itemUser.phone;
            itemUser.operator = !!req.body && !!req.body.operator ? req.body.operator : itemUser.operator;
            itemUser.id_cost_center = !!req.body && !!req.body.id_cost_center ? req.body.id_cost_center : itemUser.id_cost_center;
            itemUser.id_secretary = !!req.body && !!req.body.id_secretary ? req.body.id_secretary : itemUser.id_secretary;
            itemUser.id_address = !!req.body && !!req.body.id_address ? req.body.id_address : itemUser.id_address;
            itemUser.id_local = !!req.body && !!req.body.id_local ? req.body.id_local : itemUser.id_local;
            itemUser.cod_profile = !!req.body && !!req.body.cod_profile ? req.body.cod_profile : itemUser.cod_profile;
        };

        await itemUser.save(itemUser)
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

    controller.deleteUser = async (req, res, next) => {

        userModel.destroy({ where: { id: req.params.id } })
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