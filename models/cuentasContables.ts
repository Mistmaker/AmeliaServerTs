import { DataTypes, DATE, Op } from 'sequelize';
import db from '../db/connection';

const CuentasContables = db.define(
  'con_maecon',
  {
    CON_CODIGO: {
      type: DataTypes.STRING(35),
      primaryKey: true,
      allowNull: false,
    },
    CON_NOMBRE: { type: DataTypes.STRING(100), allowNull: false },
    CON_CENTRO: { type: DataTypes.STRING(2), allowNull: false },
    CON_MARCA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
    CON_NIVEL: { type: DataTypes.INTEGER, allowNull: false },
    COM_CODIGO: { type: DataTypes.STRING(2), allowNull: false },
    CON_CENTROSUB: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
    },
    CON_CODSRI: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    CON_CODCAJA: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

export default CuentasContables;
