import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TipoPrecio = db.define('tipos_precios', {
    TPR_ID: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
    TPR_NOMBRE: { type: DataTypes.STRING(25), allowNull: false, },

}, {
    timestamps: false,
    freezeTableName: true
});

export default TipoPrecio;