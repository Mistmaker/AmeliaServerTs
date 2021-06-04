import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Producto = db.define('inv_maearticulo', {
    ART_CODIGO: {type: DataTypes.STRING(25), primaryKey: true, allowNull: false, }, 
    ART_CODIGOAUXILIAR: { type: DataTypes.STRING(25), allowNull: true, defaultValue: null, },
    GRU_CODIGO: { type: DataTypes.STRING(30), allowNull: false, },
    ART_NOMBRE: { type: DataTypes.STRING(300), allowNull: false, },
    ART_MARCA: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    ART_MODELO: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    ART_TRIBUTAIVA: { type: DataTypes.STRING(1), allowNull: false, },
    ART_TRIBUTAICE: { type: DataTypes.STRING(1), allowNull: true, defaultValue: 'N', },
    ART_OBSERVACION: { type: DataTypes.STRING(200), allowNull: true, defaultValue: null, },
    ART_ESTADO: { type: DataTypes.STRING(1), allowNull: true, defaultValue: '1', },

}, {
    timestamps: false,
    freezeTableName: true
});

export default Producto;