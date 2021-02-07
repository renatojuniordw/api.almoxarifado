const sequelize = require('sequelize');
const database = require('./../../config/db.js');

const profile = database.define('profile', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    cod_profile: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    operator: {
        type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = profile;