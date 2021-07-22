import { DataTypes, Op } from 'sequelize';
import db from '../db/connection';

const EncabezadoFactura = db.define(
  'com_encfacpro',
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
    ENCFACPRO_FECHAEMISION: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_FECHAVENCIMIENTO: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_IVA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: '1',
    },
    ENCFACPRO_ESTADO: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: null,
    },
    PRO_CODIGO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_CONTACTO: {
      type: DataTypes.STRING(120),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_REFERENCIA: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_TOTAL: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_TOTALNETO: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_VALORDES: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_PORCEDES: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_VALORIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_PORCEIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_VALORICE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_BASEIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_BASEICE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_BASECERO: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_COMENTARIO: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_OTROS: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ASI_NRO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_FECHAREC: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_DISTCARGOS: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_NUMDIASPLAZO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_IDCRETRI: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_SERIE: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_AUTORIZACION: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_TIPCOM: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_MONTIVAPRESER: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_PORIVAPRESER: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_MONTRETPRESER: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_MONTIVATRABIE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_PORIVATRABIE: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_MONTRETTRABIE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    MAEMOTIVO_CODIGO: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_FECHACADFAC: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_FLAG: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_NUMINGRESO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_NUMLIQUIDACION: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_FORMAPAGO: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_TIPODES: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    USU_IDENTIFICACION: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    ENCORDCOM_NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_PAGOLOCALEXT: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_PAISPAGO: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_CONVDOBLETRIB: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_PAGOEXTERIOR: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_RETSERIEEST: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_RETSERIEPTOEMI: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_RETSECUENCIAL: {
      type: DataTypes.STRING(9),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_RETAUTORIZACION: {
      type: DataTypes.STRING(37),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_RETFECHA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_ESTADO_FE: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_AUTORIZACION_FE: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_CLAVEACCESO_FE: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_NOOBJETOIVA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_NUMRETENCION: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_FECHAAUTRET_FE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_LOCALIZACIONXML: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_LOCALIZACIONPDF: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_LOCALIZACIONXMLRET: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_PATHXMLRET: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    COM_TIPOAMBFACTELEC: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_PATHXMLNOAUTO_FE: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_BLOQUEFACXML: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_BASENOOBJIVA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: '0.00',
    },
    ENCFACPRO_PATHPDF_FE: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_PAGOREGFISCAL: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_TIPOREGFISCAL: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_CODPAISREGGEN: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_CODPAISPARFIS: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_DENOMINACION: {
      type: DataTypes.STRING(125),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_EMAIL: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_CORREO: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
    },
    ENCFAC_XML: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: null,
    },
    ENCFAC_WSMSG: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_RUCTRANSPORTISTA: {
      type: DataTypes.STRING(13),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_RAZONTRANSPORTISTA: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: null,
    },
    ENCFACPRO_REGIMENTRANSPOR: {
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

export default EncabezadoFactura;
