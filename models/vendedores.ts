import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Vendedor = db.define(
  'ven_maevendedor',
  {
    VEN_CODIGO: {
      type: DataTypes.STRING(5),
      primaryKey: true,
      allowNull: false,
    },
    VEN_NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    VEN_COMISION1: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    VEN_COMISION2: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    VEN_CLAVE: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
    CAJ_CODIGO: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: '01',
    },
    BOD_CODIGO: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
    COM_CODIGO: {
      type: DataTypes.STRING(2),
      primaryKey: true,
      allowNull: false,
    },
    VEN_DIRECCION1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    VEN_DIRECCION2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    VEN_TELEFONO1: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
    },
    VEN_TELEFONO2: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
    },
    VEN_FAX: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
    },
    VEN_CORREO: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: null,
    },
    VEN_ZONA: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    VEN_PROVINCIA: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    CIU_CODIGO: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: null,
    },
    VEN_JEFEZONA: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: null,
    },
    VEN_IDE: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
    },
    CON_CODIGO: {
      type: DataTypes.STRING(35),
      allowNull: true,
      defaultValue: null,
    },
    VEN_FECHAINGRESO: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    VEN_FECHANACIMIENTO: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    VEN_TRANSPORTE: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
    },
    VEN_OBSERVACIONES: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

export default Vendedor;
