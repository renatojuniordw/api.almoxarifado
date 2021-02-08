const addressModel = require('./../Model/address');

module.exports = app => {
    const addressController = {};

    addressController.createAddress = async (req, res, next) => {

        await addressModel.create(req.body)
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    };

    addressController.findAllAddress = async (req, res, next) => {

        await addressModel.findAll()
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    addressController.updateAddress = async (req, res, next) => {

        const itemAddress = await addressModel.findByPk(req.params.id);

        if (!!req.body) {
            itemAddress.district = !!req.body && !!req.body.district ? req.body.district : itemAddress.district;
            itemAddress.number = !!req.body && !!req.body.number ? req.body.number : itemAddress.number;
            itemAddress.city = !!req.body && !!req.body.city ? req.body.city : itemAddress.city;
            itemAddress.general = !!req.body && !!req.body.general ? req.body.general : itemAddress.general;
            itemAddress.complement = !!req.body && !!req.body.complement ? req.body.complement : itemAddress.complement;
            itemAddress.cep = !!req.body && !!req.body.cep ? req.body.cep : itemAddress.cep;
            itemAddress.operator = !!req.body && !!req.body.operator ? req.body.operator : itemAddress.operator;
        };

        await itemAddress.save(itemAddress)
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    addressController.deleteAddress = async (req, res, next) => {

        addressModel.destroy({ where: { id: req.params.id } })
            .then(function (item) {
                res.status(200).json(item);
                next();
            }).catch(function (err) {
                res.status(400).json(err);
                next();
            });

    }

    return addressController;
}