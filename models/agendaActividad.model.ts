import { DataTypes } from 'sequelize';
import db from '../db/connection';

const AgendaActividad = db.define('agenda_actividad', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
    ruc: { type: DataTypes.STRING(20), allowNull: true, defaultValue: null, },
    id_actividad: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null, },
    creado: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    vence: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    mes: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    estado: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    fecha_finalizacion: { type: DataTypes.STRING, allowNull: true, defaultValue: null, },
    fecha_aviso: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    usuario: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    periodo: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
}, {
    timestamps: false,
    freezeTableName: true
});

export default AgendaActividad;