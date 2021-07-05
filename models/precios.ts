import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Precio = db.define('inv_maeartprecio', {
    ART_CODIGO: {type: DataTypes.STRING(25), primaryKey: true, allowNull: false, }, 
    COM_CODIGO: {type: DataTypes.STRING(2), primaryKey: true, allowNull: false, }, 
    ARTPRE_CODIGO: {type: DataTypes.STRING(20), primaryKey: true, allowNull: false, }, 
    ARTPRE_PRECIO: {type: DataTypes.FLOAT, allowNull: true, defaultValue: '0', }, 
    ARTPRE_DESCUENTO: {type: DataTypes.FLOAT, allowNull: true, defaultValue: '0', }, 
    ARTPRE_PORCENTAJE: {type: DataTypes.DECIMAL(10,2), allowNull: true, defaultValue: '0.00', }, 
    UNI_CODIGO: {type: DataTypes.STRING(10), primaryKey: true, allowNull: false, }, 
    ARTPRE_CODBARRA: {type: DataTypes.STRING(25), allowNull: true, defaultValue: null, }, 
    ARTPRE_COSTO: {type: DataTypes.FLOAT, allowNull: true, defaultValue: '0', }, 
    ARTPRE_CANTIDADINI: {type: DataTypes.DECIMAL(10,2), allowNull: true, defaultValue: null, }, 
    ARTPRE_CANTIDADFIN: {type: DataTypes.DECIMAL(10,2), allowNull: true, defaultValue: null, }, 
    ARTPRE_DESCF: {type: DataTypes.DECIMAL(10,2), allowNull: true, defaultValue: null, }, 
    ARTPRE_DESCP: {type: DataTypes.DECIMAL(10,2), allowNull: true, defaultValue: null, }, 
    ARTPRE_PRECIOFPVP: {type: DataTypes.FLOAT, allowNull: true, defaultValue: null, }, 

}, {
    timestamps: false,
    freezeTableName: true
});

export default Precio;