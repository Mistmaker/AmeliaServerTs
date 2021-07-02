import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TipoCliente = db.define('tipo_cliente', {
    ticli_codigo: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    ticli_nombre: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },


}, {
    timestamps: false,
    freezeTableName: true
});
TipoCliente.removeAttribute('id');

export default TipoCliente;