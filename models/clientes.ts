import { DataTypes, Op } from 'sequelize';
import db from '../db/connection';

const Cliente = db.define('ven_maecliente', {
    CLI_CODIGO: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true, },
    CLI_TIPOIDE: { type: DataTypes.INTEGER, allowNull: false, },
    CLI_RUC: { type: DataTypes.STRING(20), allowNull: false, },
    CLI_NOMBRE: { type: DataTypes.STRING(300), allowNull: true, defaultValue: null, },
    CLI_NOMBREC: { type: DataTypes.STRING(300), allowNull: true, defaultValue: null, },
    CLI_DIRECCION1: { type: DataTypes.STRING(300), allowNull: true, defaultValue: null, },
    CLI_DIRECCION2: { type: DataTypes.STRING(300), allowNull: true, defaultValue: null, },
    CLI_TELEFONO1: { type: DataTypes.STRING(20), allowNull: true, defaultValue: null, },
    CLI_TELEFONO2: { type: DataTypes.STRING(20), allowNull: true, defaultValue: null, },
    CLI_CORREO1: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    CLI_CORREO2: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    CLI_ACTIVIDAD: { type: DataTypes.STRING(600), allowNull: true, defaultValue: null, },
    CLI_CLASECONTRIBUYENTE: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    CLI_TIPOCONTRIBUYENTE: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    CLI_FECINIACTIVIDADES: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    CLI_FECCESACTIVIDADES: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    CLI_FECREIACTIVIDADES: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    CLI_FECACTUALIZACION: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    CLI_CATMIPYMES: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    CLI_ESTADO: { type: DataTypes.STRING(1), allowNull: true, defaultValue: '1', },

}, {
    timestamps: false,
    freezeTableName: true
});

export default Cliente;