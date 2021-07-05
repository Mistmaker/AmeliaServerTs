import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TipoPrecio = db.define('tipos_precios', {
    id_tipre: {type: DataTypes.STRING(1), primaryKey: true, allowNull: false, },
    tipre_nombre: {type: DataTypes.STRING(20), allowNull: true, defaultValue: null, },
}, {
    timestamps: false,
    freezeTableName: true
});

export default TipoPrecio;