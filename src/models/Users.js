import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js';

const User = sequelize.define('users', 
{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    usrname: {
        type: Sequelize.TEXT
    },
    pass: {
        type: Sequelize.TEXT
    },
    name: {
        type: Sequelize.TEXT
    },
    gender: {
        type: Sequelize.CHAR
    },
    age: {
        type: Sequelize.INTEGER
    },
    phone: {
        type: Sequelize.BIGINT
    },
    birthdate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
})

export default User;