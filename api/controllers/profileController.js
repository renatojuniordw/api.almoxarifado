const profileModel = require('./../Model/profile');

module.exports = app => {
    const controllerProfile = {};

    controllerProfile.createProfile = async (req, res, next) => {

        await profileModel.create(req.body)
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    };

    controllerProfile.findAllProfile = async (req, res, next) => {

        await profileModel.findAll()
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    controllerProfile.updateProfile = async (req, res, next) => {

        const itemProfile = await profileModel.findByPk(req.params.id);

        if (!!req.body) {
            itemProfile.cod_profile = !!req.body && !!req.body.cod_profile ? req.body.cod_profile : itemProfile.cod_profile;
            itemProfile.operator = !!req.body && !!req.body.operator ? req.body.operator : itemProfile.operator;
            itemProfile.name = !!req.body && !!req.body.name ? req.body.name : itemProfile.name;
        };

        await itemProfile.save(itemProfile)
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    controllerProfile.deleteProfile = async (req, res, next) => {

        profileModel.destroy({ where: { id: req.params.id } })
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    return controllerProfile;
}