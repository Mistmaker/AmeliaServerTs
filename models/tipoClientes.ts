import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TipoClientes = db.define('ven_maetipocliente', {
    TIP_CODIGO: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
    TIP_NOMBRE: { type: DataTypes.STRING(60), allowNull: false, },
}, {
    timestamps: false,
    freezeTableName: true
});
TipoClientes.removeAttribute('id');

export default TipoClientes;