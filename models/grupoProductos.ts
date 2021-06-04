import { DataTypes } from 'sequelize';
import db from '../db/connection';

const GrupoProducto = db.define('inv_maegrupo', {
    GRU_CODIGO: { type: DataTypes.STRING(30), primaryKey: true, allowNull: false, },
    GRU_NOMBRE: { type: DataTypes.STRING(100), allowNull: false, },

}, {
    timestamps: false,
    freezeTableName: true
});

export default GrupoProducto;