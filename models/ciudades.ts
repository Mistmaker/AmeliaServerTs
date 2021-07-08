import { DataTypes, DATE, Op } from 'sequelize';
import db from '../db/connection';

const Ciudad = db.define(
  'seg_maeubigeografica',
  {
    UBIGEO_NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
    },
    UBIGEO_NIVEL: { type: DataTypes.STRING, allowNull: false },
    UBIGEO_CODIGO: { type: DataTypes.STRING(25), allowNull: false },
    COM_CODIGO: { type: DataTypes.STRING(10), allowNull: false },
    CAPITAL: { type: DataTypes.STRING(1), allowNull: false },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

export default Ciudad;
