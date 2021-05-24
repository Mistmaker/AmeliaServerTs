import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Producto = db.define('inv_maearticulo', {
    ART_CODIGO: { type: DataTypes.STRING(25), primaryKey: true, allowNull: false, defaultValue: null, },
    COM_CODIGO: { type: DataTypes.STRING(2), primaryKey: true, allowNull: false, defaultValue: null, },
    GRUP_CODIGO: { type: DataTypes.STRING(30), allowNull: false, defaultValue: null, },
    ART_NOMBRE: { type: DataTypes.STRING(1000), allowNull: false, defaultValue: null, },
    ART_NOMBREC: { type: DataTypes.STRING(25), allowNull: false, defaultValue: null, },
    GRUP_CODIGOP: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    ART_TRIBUTAIVA: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    ART_TRIBUTAICE: { type: DataTypes.STRING(1), allowNull: true, defaultValue: 'N', },
    ART_FECHAING: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    ART_LABORATORIO: { type: DataTypes.STRING(5), allowNull: true, defaultValue: null, },
    ART_UBICACION: { type: DataTypes.STRING(30), allowNull: true, defaultValue: null, },
    ART_MULTIUNIDAD: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    ART_UNIDADVENTA: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    ART_UNIDADCOSTEO: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    ART_CADUCA: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    ART_CODIGOALT1: { type: DataTypes.STRING(25), allowNull: true, defaultValue: null, },
    ART_CODIGOALT2: { type: DataTypes.STRING(25), allowNull: true, defaultValue: null, },
    ART_CODIGOALT3: { type: DataTypes.STRING(25), allowNull: true, defaultValue: null, },
    ART_CODIGOALT4: { type: DataTypes.STRING(25), allowNull: true, defaultValue: null, },
    ART_LARGO: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_ALTURA: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_ANCHO: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_PESO: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_COMPUESTO: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    ART_CANTMIN: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_CANTMAX: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    CON_CODIGOACT: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    CON_CODIGOGAS: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    CON_CODIGOING: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    CON_CODIGOORD1: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    CON_CODIGOORD2: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    ART_OBSERVACION: { type: DataTypes.STRING(200), allowNull: true, defaultValue: null, },
    ART_CODIGOICE: { type: DataTypes.STRING(3), allowNull: true, defaultValue: null, },
    ART_MARCA: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    ART_MODELO: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    ART_SERIE: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    ART_VOLUMEN: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    PRESENTACION_CODIGO: { type: DataTypes.STRING(3), allowNull: true, defaultValue: null, },
    ART_FACTOR: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_FLAG: { type: DataTypes.INTEGER, allowNull: false, defaultValue: '1', },
    ART_FORMAVTA: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null, },
    ART_DESCUENTO: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_SERIALFLAG: { type: DataTypes.STRING(1), allowNull: true, defaultValue: 'N', },
    ART_DIASGARANTIA: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_VALORICE: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_ACTIVO: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    ART_COSTOHISTORICO: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    CEN_CODIGO: { type: DataTypes.STRING(35), allowNull: true, defaultValue: null, },
    CON_CODIGODSCTO: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    ART_TIPO: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    CON_CODIGOPRODPROC: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    ART_PRODUCTOPROD: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    CON_CODIGOING2: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    CON_CODIGODSCTO2: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    ART_COSTOPROMEDIO: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_FECHAULTCOSTO: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    CON_CODIGOMP: { type: DataTypes.STRING(40), allowNull: true, defaultValue: null, },
    ART_ACTIVARSERIAL: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    ART_ACTIVARDIM: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    ART_ACTIVARNUMEROTEL: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    ART_UNIDADCOMPRA: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    ART_FORMSRIVTAS: { type: DataTypes.STRING(20), allowNull: true, defaultValue: null, },
    ART_FORMSRICOM: { type: DataTypes.STRING(20), allowNull: true, defaultValue: null, },
    ART_PORDISES1: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_PORDISES2: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_CAMPANIA: { type: DataTypes.STRING(20), allowNull: true, defaultValue: null, },
    ART_CAMTIPO: { type: DataTypes.STRING(6), allowNull: true, defaultValue: null, },
    ART_BASENOOBJIVA: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    ART_SUBSIDIO: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_UNIPORCAJA: { type: DataTypes.FLOAT, allowNull: true, defaultValue: null, },
    ART_CODSRIICE: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    ART_CANTIDAD: { type: DataTypes.FLOAT, allowNull: true, defaultValue: '0', },

}, {
    timestamps: false,
    freezeTableName: true
});

export default Producto;