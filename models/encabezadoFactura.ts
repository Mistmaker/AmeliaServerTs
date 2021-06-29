import { DataTypes, Op } from 'sequelize';
import db from '../db/connection';

const EncabezadoFactura = db.define(
  'com_encfacpro',
  {
    ENCFACPRO_NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    COM_CODIGO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'inv_maemotivo',
        key: 'COM_CODIGO',
      },
    },
    ENCFACPRO_FECHAEMISION: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ENCFACPRO_FECHAVENCIMIENTO: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ENCFACPRO_IVA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: '1',
    },
    ENCFACPRO_ESTADO: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    PRO_CODIGO: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ENCFACPRO_CONTACTO: {
      type: DataTypes.STRING(120),
      allowNull: true,
    },
    ENCFACPRO_REFERENCIA: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    ENCFACPRO_TOTAL: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_TOTALNETO: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_VALORDES: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_PORCEDES: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_VALORIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_PORCEIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_VALORICE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_BASEIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_BASEICE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_BASECERO: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_COMENTARIO: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    ENCFACPRO_OTROS: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ASI_NRO: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    ENCFACPRO_FECHAREC: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ENCFACPRO_DISTCARGOS: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    ENCFACPRO_NUMDIASPLAZO: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ENCFACPRO_IDCRETRI: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    ENCFACPRO_SERIE: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    ENCFACPRO_AUTORIZACION: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    ENCFACPRO_TIPCOM: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    ENCFACPRO_MONTIVAPRESER: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_PORIVAPRESER: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    ENCFACPRO_MONTRETPRESER: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_MONTIVATRABIE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_PORIVATRABIE: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    ENCFACPRO_MONTRETTRABIE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    MAEMOTIVO_CODIGO: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'inv_maemotivo',
        key: 'MAEMOTIVO_CODIGO',
      },
    },
    ENCFACPRO_FECHACADFAC: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ENCFACPRO_FLAG: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    ENCFACPRO_NUMINGRESO: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ENCFACPRO_NUMLIQUIDACION: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ENCFACPRO_FORMAPAGO: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    ENCFACPRO_TIPODES: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    USU_IDENTIFICACION: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    ENCFACPRO_GASTO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    ENCORDCOM_NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'com_encordcom',
        key: 'ENCORDCOM_NUMERO',
      },
    },
    ENCFACPRO_PAGOLOCALEXT: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    ENCFACPRO_PAISPAGO: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    ENCFACPRO_CONVDOBLETRIB: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    ENCFACPRO_PAGOEXTERIOR: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    ENCFACPRO_RETSERIEEST: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    ENCFACPRO_RETSERIEPTOEMI: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    ENCFACPRO_RETSECUENCIAL: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    ENCFACPRO_RETAUTORIZACION: {
      type: DataTypes.STRING(37),
      allowNull: true,
    },
    ENCFACPRO_RETFECHA: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ENCFACPRO_ESTADO_FE: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    ENCFACPRO_AUTORIZACION_FE: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    ENCFACPRO_CLAVEACCESO_FE: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    ENCFACPRO_NOOBJETOIVA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    ENCFACPRO_NUMRETENCION: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ENCFACPRO_FECHAAUTRET_FE: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ENCFACPRO_LOCALIZACIONXML: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    ENCFACPRO_LOCALIZACIONPDF: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    ENCFACPRO_LOCALIZACIONXMLRET: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    ENCFACPRO_PATHXMLRET: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    COM_TIPOAMBFACTELEC: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    ENCFACPRO_PATHXMLNOAUTO_FE: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    ENCFACPRO_BLOQUEFACXML: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ENCFACPRO_BASENOOBJIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    ENCFACPRO_PATHPDF_FE: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    ENCFACPRO_PAGOREGFISCAL: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    ENCFACPRO_TIPOREGFISCAL: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    ENCFACPRO_CODPAISREGGEN: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    ENCFACPRO_CODPAISPARFIS: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    ENCFACPRO_DENOMINACION: {
      type: DataTypes.STRING(125),
      allowNull: true,
    },
    ENCFACPRO_EMAIL: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    ENCFACPRO_CORREO: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    ENCFAC_XML: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    ENCFAC_WSMSG: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    ENCFACPRO_RUCTRANSPORTISTA: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    ENCFACPRO_RAZONTRANSPORTISTA: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    ENCFACPRO_REGIMENTRANSPOR: {
      type: DataTypes.STRING(100),
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
        fields: [{ name: 'ENCFACPRO_NUMERO' }, { name: 'COM_CODIGO' }],
      },
      {
        name: 'UK_COM_ENCFACPRO',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'ENCFACPRO_REFERENCIA' },
          { name: 'COM_CODIGO' },
          { name: 'ENCFACPRO_SERIE' },
          { name: 'PRO_CODIGO' },
        ],
      },
      {
        name: 'FK_COM_ENCFACPRO_ENCORDCOM',
        using: 'BTREE',
        fields: [{ name: 'ENCORDCOM_NUMERO' }, { name: 'COM_CODIGO' }],
      },
      {
        name: 'FK_ENCFACPRO_MAEMOTIVO',
        using: 'BTREE',
        fields: [{ name: 'MAEMOTIVO_CODIGO' }, { name: 'COM_CODIGO' }],
      },
    ],
  },
);

export default EncabezadoFactura;
