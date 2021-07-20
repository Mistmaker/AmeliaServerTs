import { DataTypes } from 'sequelize';
import db from '../db/connection';

const InventarioKardex = db.define(
  'inv_enckardex',
  {
    kdx_codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    art_codigo: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: null,
    },
    kdx_cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    kdx_costofecha: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

export default InventarioKardex;
