const sequelize = require('sequelize');
const database = require('./../../config/db.js');

const itemProduct = database.define('item_product', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cadum: {
        type: sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    operator: {
        type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = itemProduct;