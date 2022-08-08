import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js';

const Property = sequelize.define('properties',
{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.DECIMAL
    },
    quantity: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
})

export default Property;