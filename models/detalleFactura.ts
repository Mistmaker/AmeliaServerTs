import { DataTypes, Op } from 'sequelize';
import db from '../db/connection';

const DetalleFactura = db.define(
  'com_detfacpro',
  {
    ENCFACPRO_NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'com_encfacpro',
        key: 'ENCFACPRO_NUMERO',
      },
    },
    COM_CODIGO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'con_maecen',
        key: 'COM_CODIGO',
      },
    },
    DETFACPRO_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    DETFACPRO_TIPODET: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    BOD_CODIGO: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    DETFACPRO_CODIGO: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    DETFACPRO_DESCRIPCION: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    DETFACPRO_UNIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    DETFACPRO_CANTIDAD: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    DETFACPRO_ENTREGADO: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    DETFACPRO_COSTO: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    DETFACPRO_VALDES: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    DETFACPRO_PORDES: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    DETFACPRO_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    DETFACPRO_PORIVA: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    DETFACPRO_IVA: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    DETFACPRO_TRIBICE: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    DETFACPRO_ICE: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    DETFACPRO_PORCEICE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    DETFACPRO_BASEIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    DETFACPRO_BASEICE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    DETFACPRO_BASECERO: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCORDCOM_NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'com_detordcom',
        key: 'ENCORDCOM_NUMERO',
      },
    },
    DETORDCOM_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'com_detordcom',
        key: 'DETORDCOM_LINEA',
      },
    },
    ENCNOTREC_NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'com_detnotrec',
        key: 'ENCNOTREC_NUMERO',
      },
    },
    DETNOTREC_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'com_detnotrec',
        key: 'DETNOTREC_LINEA',
      },
    },
    DETFACPRO_TOTALINCP: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    DETFACPRO_PROMOCION: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    DETFACPRO_PORDES2: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    DETFACPRO_PORDES3: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    CEN_CODIGO: {
      type: DataTypes.STRING(35),
      allowNull: true,
      references: {
        model: 'con_maecen',
        key: 'CEN_CODIGO',
      },
    },
    DETFACPRO_FACTOR: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    DETFACPRO_PRECIOFOB: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    DETFACPRO_ESQUEMADOC: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    DETFACPRO_TIPOSRI: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    DETFACPRO_PRECIOA: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    DETFACPRO_PRECIOB: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    DETFACPRO_PRECIOC: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    TRNSOLFAC_CODIGO: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    TRNSOLFAC_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ENCREQ_NUMERO: {
      type: DataTypes.STRING(35),
      allowNull: true,
      references: {
        model: 'com_detrequisicion',
        key: 'ENCREQ_NUMERO',
      },
    },
    DETREQ_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'com_detrequisicion',
        key: 'DETREQ_LINEA',
      },
    },
    ENCGRE_CODIGO: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    DETGRE_LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    DETFACPRO_BASENOOBJIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    DETFACPRO_TRIBASENOOBJIVA: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    DETFACPRO_CODIGOALT: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    DETFACPRO_CAJAS: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    DETFACPRO_FRACCIONES: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'ENCFACPRO_NUMERO' },
          { name: 'COM_CODIGO' },
          { name: 'DETFACPRO_LINEA' },
        ],
      },
      {
        name: 'FK_COM_DETFACPRO_DETNOTREC',
        using: 'BTREE',
        fields: [
          { name: 'ENCNOTREC_NUMERO' },
          { name: 'COM_CODIGO' },
          { name: 'DETNOTREC_LINEA' },
        ],
      },
      {
        name: 'FK_COM_DETFACPRO_DETORDCOM',
        using: 'BTREE',
        fields: [
          { name: 'ENCORDCOM_NUMERO' },
          { name: 'COM_CODIGO' },
          { name: 'DETORDCOM_LINEA' },
        ],
      },
      {
        name: 'FK_COM_DETFACPRO_DETREQ',
        using: 'BTREE',
        fields: [
          { name: 'ENCREQ_NUMERO' },
          { name: 'COM_CODIGO' },
          { name: 'DETREQ_LINEA' },
        ],
      },
      {
        name: 'FK_COM_DETFACPRO_MAECEN',
        using: 'BTREE',
        fields: [{ name: 'CEN_CODIGO' }, { name: 'COM_CODIGO' }],
      },
    ],
  },
);

export default DetalleFactura;
