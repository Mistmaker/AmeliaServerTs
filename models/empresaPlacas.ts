import { DataTypes } from 'sequelize';
import db from '../db/connection';

const EmpresaPlaca = db.define('seg_maecompaniaplacas', {
    COP_CODIGO: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
    COP_PLACA: { type: DataTypes.STRING(8), unique: true, allowNull: false, },
    COP_OBSERVACION: { type: DataTypes.STRING(200), allowNull: true, defaultValue: null, },
}, {
    timestamps: false,
    freezeTableName: true
});
EmpresaPlaca.removeAttribute('id');

export default EmpresaPlaca;