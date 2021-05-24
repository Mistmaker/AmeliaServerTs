import { DataTypes } from 'sequelize';
import db from '../db/connection';

const GrupoProducto = db.define('inv_maegrupo', {
    GRUP_CODIGO: { type: DataTypes.STRING(30), primaryKey: true, allowNull: false, },
    GRUP_NOMBRE: { type: DataTypes.STRING(50), allowNull: true, defaultValue: null, },
    CON_CODIGO: { type: DataTypes.STRING(35), allowNull: true, defaultValue: null, },
    GRUP_CODIGOP: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    CEN_CODIGO: { type: DataTypes.STRING(35), allowNull: true, defaultValue: null, },
    GRUP_VALOR1: { type: DataTypes.FLOAT, allowNull: true, defaultValue: '0', },
    GRUP_VALOR2: { type: DataTypes.FLOAT, allowNull: true, defaultValue: '0', },
    GRUP_VALOR3: { type: DataTypes.FLOAT, allowNull: true, defaultValue: '0', },
    GRUP_VALOR4: { type: DataTypes.FLOAT, allowNull: true, defaultValue: '0', },
    GRUP_FACTOR: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    CON_CODIGOACT: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    CON_CODIGOGAS: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    CON_CODIGOING: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    GRUP_GARANTIAS: { type: DataTypes.STRING(4000), allowNull: true, defaultValue: null, },
    GRUP_OTROSCON: { type: DataTypes.STRING(4000), allowNull: true, defaultValue: null, },

}, {
    timestamps: false,
    freezeTableName: true
});

export default GrupoProducto;