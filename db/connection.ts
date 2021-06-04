import { Sequelize  } from 'sequelize';

const db = new Sequelize('amelia','soporte', 'soporte', {
    host: '181.199.71.180',
    dialect: 'mysql',
    port: 6363,
    // logging: false
});

export default db;