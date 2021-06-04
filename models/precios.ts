import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Precio = db.define('inv_maeartprecio', {
    ARTPRE_CODIGO: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
    TRP_ID: { type: DataTypes.INTEGER, allowNull: false, },
    ARTPRE_PRECIO: { type: DataTypes.DECIMAL(10, 6), allowNull: true, defaultValue: null, },

}, {
    timestamps: false,
    freezeTableName: true
});

export default Precio;