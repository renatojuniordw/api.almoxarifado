const sequelize = require('sequelize');
const database = require('./../../config/db.js');

const costCenter = database.define('cost_center', {
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
    description: {
        type: sequelize.STRING,
        allowNull: false
    },
    responsible: {
        type: sequelize.STRING,
        allowNull: false
    },
    operator: {
        type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = costCenter;