import { DataTypes } from 'sequelize';
import db from '../db/connection';

const AgendaActividadDocumentos = db.define('agenda_actividad_documentos',
    {
        ADOC_CODIGO: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
        id_agenda: { type: DataTypes.INTEGER, allowNull: false, },
        id_usuario: { type: DataTypes.STRING(10), allowNull: false, },
        ADOC_NOMBRE: { type: DataTypes.STRING(2000), allowNull: false, },
        ADOC_DATOS: { type: DataTypes.BLOB('long'), allowNull: false, },
        ADOC_SIZE: { type: DataTypes.FLOAT, allowNull: false, },
        ADOC_TIPO: { type: DataTypes.STRING(100), allowNull: false, },
        ADOC_MIMETYPE: { type: DataTypes.STRING(100), allowNull: false, },
        ADOC_FECHA: { type: DataTypes.DATE, allowNull: false, },
    },
    {
        timestamps: false,
        freezeTableName: true,
    },
);
AgendaActividadDocumentos.removeAttribute('id');

export default AgendaActividadDocumentos;
