import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TipoJuridicaCliente = db.define('ven_tipojuridicacliente', {
    TPJ_CODIGO: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
    TPJ_NOMBRE: { type: DataTypes.STRING(50), allowNull: false, },
    TPJ_TIPOCLIENTE: { type: DataTypes.STRING(3), allowNull: true, defaultValue: null, },

}, {
    timestamps: false,
    freezeTableName: true
});
TipoJuridicaCliente.removeAttribute('id');

export default TipoJuridicaCliente;