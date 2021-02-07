const Produto = require('./../Model/produto');

module.exports = app => {
    const controller = {};

    controller.createProduto = async (req, res, next) => {

        await Produto.create(req.body)
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

    controller.findAll = async (req, res, next) => {

        await Produto.findAll()
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

    controller.update = async (req, res, next) => {

        const produto = await Produto.findByPk(req.params.id);

        if (!!req.body) {
            produto.nome = !!req.body && !!req.body.nome ? req.body.nome : produto.nome;
            produto.preco = !!req.body && !!req.body.preco ? req.body.preco : produto.preco;
            produto.descricao = !!req.body && !!req.body.descricao ? req.body.descricao : produto.descricao;
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

    controller.delete = async (req, res, next) => {

        Produto.destroy({ where: { id: req.params.id } })
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