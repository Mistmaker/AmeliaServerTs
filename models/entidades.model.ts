import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Entidad = db.define('entidad', {
    codigo_entidad: { type: DataTypes.STRING(45), primaryKey: true, allowNull: false, },
    entidad: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
}, {
    timestamps: false,
    freezeTableName: true
});

export default Entidad;