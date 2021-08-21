import { Sequelize } from 'sequelize';

const db = new Sequelize('amelia_vacia','soporte', 'soporte', {
    host: '181.199.71.180',
    dialect: 'mysql',
    port: 6363,
    logging: console.log
});

export default db;