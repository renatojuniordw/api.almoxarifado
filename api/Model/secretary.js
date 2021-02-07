const sequelize = require('sequelize');
const database = require('./../../config/db.js');

const secretary = database.define('secretary', {
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
    operator: {
        type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = secretary;