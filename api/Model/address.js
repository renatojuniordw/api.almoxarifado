const sequelize = require('sequelize');
const database = require('../../config/db.js');

const address = database.define('address', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    district: {
        type: sequelize.STRING,
        allowNull: false,
    },
    number: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    city: {
        type: sequelize.STRING,
        allowNull: false,
    },
    complement: {
        type: sequelize.STRING
    },
    cep: {
        type: sequelize.STRING,
        allowNull: false,
    },
    operator: {
        type: sequelize.STRING,
        allowNull: false,
    }
});

module.exports = address;