const configSMTP = require('../../config/nodemailer')();

module.exports = app => {

    const controller = {};

    controller.sendEmail = (req, res, next) => {
        configSMTP.sendMail(req.body, (error, data) => {
            if (error) {
                console.log(error);
                res.status(400).json(error);
            } else {
                console.log('E-mail enviado com sucesso!');
                res.status(200).json(`E-mail enviado com sucesso, para ${req.body.to}`);
                next();
            }
        });
    };

    return controller;
}