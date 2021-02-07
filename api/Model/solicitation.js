const sequelize = require('sequelize');
const database = require('./../../config/db.js');

const solicitation = database.define('solicitation', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nr_solicitation: {
        type: sequelize.STRING,
        allowNull: false
    },
    operator: {
        type: sequelize.STRING,
        allowNull: false
    },
    id_user: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        }
    },
    id_cost_center: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'cost_centers',
            key: 'id',
        }
    },
    id_local: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'locals',
            key: 'id',
        }
    },
});

module.exports = solicitation;