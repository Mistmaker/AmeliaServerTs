import { DataTypes } from 'sequelize';
import db from '../db/connection';

const GrupoCliente = db.define('ven_maegrupo', {
    GRU_TIPO: { type: DataTypes.STRING(3), primaryKey: true, allowNull: false, },
    GRU_CODIGO: { type: DataTypes.STRING(5), primaryKey: true, allowNull: false, },
    GRU_NOMBRE: { type: DataTypes.STRING(35), allowNull: true, defaultValue: null, },
    CON_CODIGO: { type: DataTypes.STRING(35), allowNull: true, defaultValue: null, },
    CON_CODIGODES: { type: DataTypes.STRING(35), allowNull: true, defaultValue: null, },
    GRU_PORDES: { type: DataTypes.FLOAT, allowNull: false, },
    CEN_CODIGO: { type: DataTypes.STRING(35), allowNull: true, defaultValue: null, },
}, {
    timestamps: false,
    freezeTableName: true
});

export default GrupoCliente;