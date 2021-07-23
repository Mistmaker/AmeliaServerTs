import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ClienteDatosAdicionales = db.define('ven_datadiclinete',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
        CLI_CODIGO: { type: DataTypes.STRING(20), allowNull: false, },
        COM_CODIGO: { type: DataTypes.STRING(2), allowNull: false, },
        DATO1: { type: DataTypes.STRING(200), allowNull: true, defaultValue: null, },
        DATO2: { type: DataTypes.STRING(200), allowNull: true, defaultValue: null, },
        DATO3: { type: DataTypes.STRING(200), allowNull: true, defaultValue: null, },
    },
    {
        timestamps: false,
        freezeTableName: true,
    },
);
// ClienteDatosAdicionales.removeAttribute('id');

export default ClienteDatosAdicionales;
