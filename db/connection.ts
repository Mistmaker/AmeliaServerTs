import { Sequelize } from 'sequelize';

const db = new Sequelize('amelia','soporte', 'soporte', {
    host: '186.4.146.196',
    dialect: 'mysql',
    port: 6363,
    logging: console.log
});

export default db;