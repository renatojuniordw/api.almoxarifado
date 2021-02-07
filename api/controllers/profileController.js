const profileModel = require('./../Model/profile');

module.exports = app => {
    const controllerProfile = {};

    controllerProfile.createProfile = async (req, res, next) => {

        await profileModel.create(req.body)
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

    controllerProfile.findAllProfile = async (req, res, next) => {

        await profileModel.findAll()
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

    controllerProfile.updateProfile = async (req, res, next) => {

        const itemProfile = await profileModel.findByPk(req.params.id);

        if (!!req.body) {
            itemProfile.codProfile = !!req.body && !!req.body.codProfile ? req.body.codProfile : itemProfile.codProfile;
            itemProfile.operator = !!req.body && !!req.body.operator ? req.body.operator : itemProfile.operator;
            itemProfile.name = !!req.body && !!req.body.name ? req.body.name : itemProfile.name;
        };

        await itemProfile.save(itemProfile)
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

    controllerProfile.deleteProfile = async (req, res, next) => {

        profileModel.destroy({ where: { id: req.params.id } })
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

    return controllerProfile;
}