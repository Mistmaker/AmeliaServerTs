import { Sequelize  } from 'sequelize';

const db = new Sequelize('amelia','soporte', 'soporte', {
    host: '181.199.71.180',
    dialect: 'mysql',
    port: 6363,
    logging: true
});

// const db = new Sequelize('amelia','root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306,
//     // logging: true
// });

export default db;