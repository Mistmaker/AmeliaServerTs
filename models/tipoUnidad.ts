import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TipoUnidad = db.define(
  'inv_maeunidad',
  {
    UNI_CODIGO: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      allowNull: false,
    },
    COM_CODIGO: {
      type: DataTypes.STRING(2),
      primaryKey: true,
      allowNull: false,
    },
    UNI_NOMBRE: { type: DataTypes.STRING(45), allowNull: false },
    UNI_SIMBOLO: { type: DataTypes.STRING(10), allowNull: false },
    UNI_ORDEN: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
    UNI_FLAG: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

export default TipoUnidad;
