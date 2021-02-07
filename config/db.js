const Sequelize = require('sequelize');
const config = require('config');

const configDB = config.get('configDatabase');

const sequelize = new Sequelize(
    configDB.database,
    configDB.auth.user,
    configDB.auth.pass,
    configDB.dialect
);

module.exports = sequelize;