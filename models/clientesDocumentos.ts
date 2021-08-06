import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ClientesDocumentos = db.define('ven_maedocumentoscliente',
    {
        DOC_CODIGO: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
        CLI_CODIGO: { type: DataTypes.STRING(20), allowNull: false, },
        DOC_NOMBRE: { type: DataTypes.STRING(2000), allowNull: false, },
        DOC_DATOS: { type: DataTypes.BLOB('long'), allowNull: false, },
        DOC_SIZE: { type: DataTypes.FLOAT, allowNull: false, },
        DOC_TIPO: { type: DataTypes.STRING(100), allowNull: false, },
        DOC_MIMETYPE: { type: DataTypes.STRING(100), allowNull: false, },
        DOC_FECHA: { type: DataTypes.STRING, allowNull: false, },
        DOC_TOTAL: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
        DOC_ESTADO: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    },
    {
        timestamps: false,
        freezeTableName: true,
    },
);
ClientesDocumentos.removeAttribute('id');

export default ClientesDocumentos;
