const nodemailer = require('nodemailer');
const config = require('config');

module.exports = () => {
    return nodemailer.createTransport(config.get('configSMTP'));;
}