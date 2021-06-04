import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TipoCliente = db.define('tipo_cliente', {
    TCL_CODIGO: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
    TCL_NOMBRE: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },

}, {
    timestamps: false,
    freezeTableName: true
});
TipoCliente.removeAttribute('id');

export default TipoCliente;