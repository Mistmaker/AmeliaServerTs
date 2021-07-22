import { DataTypes, Op } from 'sequelize';
import db from '../db/connection';

const DetalleFactura = db.define(
  'com_detfacpro',
  {
    ENCFACPRO_NUMERO: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false,
    },
    COM_CODIGO: {
      type: DataTypes.STRING(2),
      primaryKey: true,
      allowNull: false,
    },
    DETFACPRO_LINEA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    DETFACPRO_TIPODET: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    BOD_CODIGO: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_CODIGO: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_DESCRIPCION: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_UNIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_CANTIDAD: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_ENTREGADO: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_COSTO: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    DETFACPRO_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    DETFACPRO_PORDES: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    DETFACPRO_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    DETFACPRO_PORIVA: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    DETFACPRO_IVA: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    DETFACPRO_TRIBICE: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_ICE: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    DETFACPRO_PORCEICE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    DETFACPRO_BASEIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    DETFACPRO_BASEICE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    DETFACPRO_BASECERO: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCORDCOM_NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    DETORDCOM_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    ENCNOTREC_NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    DETNOTREC_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_TOTALINCP: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    DETFACPRO_PROMOCION: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_PORDES2: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    DETFACPRO_PORDES3: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    CEN_CODIGO: {
      type: DataTypes.STRING(35),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_FACTOR: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    DETFACPRO_PRECIOFOB: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    DETFACPRO_ESQUEMADOC: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_TIPOSRI: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_PRECIOA: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    DETFACPRO_PRECIOB: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    DETFACPRO_PRECIOC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
    },
    TRNSOLFAC_CODIGO: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
    TRNSOLFAC_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    ENCREQ_NUMERO: {
      type: DataTypes.STRING(35),
      allowNull: true,
      defaultValue: null,
    },
    DETREQ_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    ENCGRE_CODIGO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    DETGRE_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_BASENOOBJIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    DETFACPRO_TRIBASENOOBJIVA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_CODIGOALT: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_CAJAS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    DETFACPRO_FRACCIONES: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

export default DetalleFactura;
