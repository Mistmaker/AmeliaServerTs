import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Configuracion = db.define(
  'config_sistema',
  {
    codigo_config: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
    },
    codigo: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    numero: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

export default Configuracion;
