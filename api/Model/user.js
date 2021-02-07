const sequelize = require('sequelize');
const database = require('./../../config/db.js');

const user = database.define('user', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cpf: {
        type: sequelize.STRING,
        allowNull: false
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    login: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    registration: {
        type: sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize.STRING,
        allowNull: false
    },
    operator: {
        type: sequelize.STRING,
        allowNull: false
    },
    id_cost_center: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'cost_centers',
            key: 'id',
        }
    },
    id_secretary: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'secretaries',
            key: 'id',
        }
    },
    id_address: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'addresses',
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
    id_profile: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'profiles',
            key: 'id',
        }
    }
});

module.exports = user;