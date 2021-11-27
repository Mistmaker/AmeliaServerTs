import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define<any>('seg_maeusuario', {
    USUIDENTIFICACION: { type: DataTypes.STRING(10), primaryKey: true, allowNull: false, },
    USUCLAVE: { type: DataTypes.STRING(10), allowNull: false, },
    USURUCI: { type: DataTypes.STRING(14), allowNull: false, },
    USUAPELLIDO: { type: DataTypes.STRING(45), allowNull: false, },
    USUNOMBRE: { type: DataTypes.STRING(45), allowNull: false, },
    COMCODIGO: { type: DataTypes.STRING(2), primaryKey: true, allowNull: false, },
    USUPERFIL: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    USUFECHAINICIO: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    USUFECHAFINAL: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    BOD_CODIGO: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    BOD_CODIGO_DEV: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    PERFIL_CODIGO: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    VEN_CODIGO: { type: DataTypes.STRING(5), allowNull: true, defaultValue: null, },
}, {
    timestamps: false,
    freezeTableName: true
});

export default Usuario;