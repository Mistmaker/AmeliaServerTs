import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ClientesDocumentos = db.define('ven_maedocumentoscliente',
    {
        DOC_CODIGO: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
        CLI_CODIGO: { type: DataTypes.STRING(20), allowNull: false, },
        DOC_NOMBRE: { type: DataTypes.STRING(2000), allowNull: false, },
        DOC_DATOS: { type: DataTypes.BLOB, allowNull: false, },
        DOC_FECHA: { type: DataTypes.DATE, allowNull: false, },

    },
    {
        timestamps: false,
        freezeTableName: true,
    },
);
ClientesDocumentos.removeAttribute('id');

export default ClientesDocumentos;
