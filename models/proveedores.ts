import { DataTypes, Op } from 'sequelize';
import db from '../db/connection';

const Proveedor = db.define(
  'com_maeproveedor',
  {
    PRO_CODIGO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    GRU_CODIGO: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: '01', // TODO: esto es temporal
      //   references: {
      //     model: 'ven_maegrupo',
      //     key: 'GRU_CODIGO',
      //   },
    },
    PRO_NOMBREC: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    PRO_NOMBRE: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    PRO_RUCIDE: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: 'UK_MAEPROVEEDOR',
    },
    PRO_DIRECCION1: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    PRO_DIRECCION2: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    PRO_CODPOSTAL: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    PRO_TELEFONO1: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    PRO_TELEFONO2: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    PRO_FAX: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    PRO_CORREO: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    PRO_CONTACTO: {
      type: DataTypes.STRING(120),
      allowNull: true,
    },
    PRO_FECING: {
      type: DataTypes.CHAR(10),
      allowNull: true,
    },
    PRO_LIMCREDIT: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    PRO_DIACREDIT: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    PRO_DESCUENTO: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    PRO_IVA: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    PRO_CONTRIBUYENTE: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    PRO_LISTA: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    CON_CODIGO1: {
      type: DataTypes.STRING(35),
      allowNull: true,
    },
    CON_CODIGO2: {
      type: DataTypes.STRING(35),
      allowNull: true,
    },
    PRO_ZONA: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    PRO_OBSERVACION: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    PRO_NUMSERIE: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    PRO_NUMAUTORIZACION: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    PRO_TIPOIDE: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    CEN_CODIGO: {
      type: DataTypes.STRING(35),
      allowNull: true,
    },
    PRO_TIPO: {
      type: DataTypes.CHAR(2),
      allowNull: true,
    },
    PRO_FLAG: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    PRO_BONIFICACION: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    COM_CODIGO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
    },
    GRU_TIPO: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'PRO', // TODO: esto es temporal
      //   references: {
      //     model: 'ven_maegrupo',
      //     key: 'GRU_TIPO',
      //   },
    },
    COM_BANCODIGOCM: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    COM_TIPOCTACM: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    COM_NUMCTACM: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    COM_FORPAGCM: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    COM_BENFCM: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    COM_DIFBENFCM: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    COM_TELFBENFCM: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    PRO_TIPOIDENTIFCM: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    PRO_IDCM: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    PRO_CIUDADCM: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    PRO_LOCPAGCM: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    PRO_EMAILCM: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    PRO_REGCOND: {
      type: DataTypes.STRING(4000),
      allowNull: true,
    },
    PRO_TIPOA: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    PRO_PARTEREL: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    CON_CODIGO_RET332: {
      type: DataTypes.STRING(35),
      allowNull: true,
    },
    PRO_CORREO2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: 'alexisandinom@gmail.com',
    },
    PRO_FACTURAELECT: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    PRO_TIPODEN: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    PRO_TRANSPORTE: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    PRO_PAGOLOCALEXT: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    PRO_TIPOREGFISCAL: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    PRO_CODPAISREGGEN: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    PRO_CODPAISPARFIS: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    PRO_DENOMINACION: {
      type: DataTypes.STRING(125),
      allowNull: true,
    },
    PRO_PAISPAGO: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    PRO_CONVDOBLETRIB: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    PRO_PAGOEXTERIOR: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    PRO_PAGOREGFISCAL: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'PRO_CODIGO' }, { name: 'COM_CODIGO' }],
      },
      {
        name: 'UK_MAEPROVEEDOR',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'PRO_RUCIDE' }],
      },
      {
        name: 'FK_COM_MAEPROVEEDOR_MAEGRUPO',
        using: 'BTREE',
        fields: [{ name: 'GRU_TIPO' }, { name: 'GRU_CODIGO' }],
      },
    ],
  },
);

export default Proveedor;

//   PRIMARY KEY (`PRO_CODIGO`,`COM_CODIGO`),
//   UNIQUE KEY `UK_MAEPROVEEDOR` (`PRO_RUCIDE`),
//   KEY `FK_COM_MAEPROVEEDOR_MAEGRUPO` (`GRU_TIPO`,`GRU_CODIGO`),
//   CONSTRAINT `FK_COM_MAEPROVEEDOR_MAEGRUPO` FOREIGN KEY (`GRU_TIPO`, `GRU_CODIGO`) REFERENCES `ven_maegrupo` (`GRU_TIPO`, `GRU_CODIGO`)
