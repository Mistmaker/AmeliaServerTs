import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ComentarioAgendaActividad = db.define('comentarios', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
    id_agenda: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null, },
    comentario: { type: DataTypes.STRING(400), allowNull: true, defaultValue: null, },
    usuario: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    fecha: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    estado: { type: DataTypes.STRING(45), allowNull: true, defaultValue: 'PENDIENTE', },
}, {
    timestamps: false,
    freezeTableName: true
});

export default ComentarioAgendaActividad;