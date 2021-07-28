import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Empresa = db.define('seg_maecompania', {
    COMCODIGO: { type: DataTypes.STRING(2), primaryKey: true, allowNull: false, },
    COMRUCI: { type: DataTypes.STRING(14), allowNull: false, },
    COMNOMBRE: { type: DataTypes.STRING(150), allowNull: false, },
    COMDIRECCION: { type: DataTypes.STRING(150), allowNull: true, defaultValue: null, },
    COMTELEFONO1: { type: DataTypes.STRING(12), allowNull: true, defaultValue: null, },
    COMTELEFONO2: { type: DataTypes.STRING(12), allowNull: true, defaultValue: null, },
    COMFAX: { type: DataTypes.STRING(12), allowNull: true, defaultValue: null, },
    COMMULTIBODEGA: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    COMREPRESENTANTE: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    COMCORREO: { type: DataTypes.STRING(50), allowNull: true, defaultValue: null, },
    COMPROVINCIA: { type: DataTypes.STRING(2), allowNull: true, defaultValue: null, },
    COMLOCALIZACION_RPT: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    COMAUTSRI_RET: { type: DataTypes.STRING(50), allowNull: true, defaultValue: null, },
    COMSERIE_RET: { type: DataTypes.STRING(6), allowNull: true, defaultValue: null, },
    COMNOMBREP: { type: DataTypes.STRING(150), allowNull: true, defaultValue: null, },
    COMCOORDINADOR: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    COMCICOORDINADOR: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    COMCONTADOR: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    COMRUCCONTADOR: { type: DataTypes.STRING(14), allowNull: true, defaultValue: null, },
    COMLOCALIZACION_FOR: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    COMNOMBRECORTO: { type: DataTypes.STRING(15), allowNull: false, },
    COMACTIVACION: { type: DataTypes.STRING(1500), allowNull: true, defaultValue: null, },
    COMCANTIDAD: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null, },
    COMLOCALIZACIONLOG1: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    COMLOCALIZACIONLOG2: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    COMLOCALIZACIONARCHIVO: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    COM_TIPOAMBFACTELEC: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    COM_FEACTIVADA: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    COM_PRODACTIVADA: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    COMRESOLUCION: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    COMDIRECSUCURSAL: { type: DataTypes.STRING(200), allowNull: true, defaultValue: null, },
    COM_CONTRIBUYENTEESP: { type: DataTypes.STRING(5), allowNull: true, defaultValue: null, },
    COM_UBICACIONARCHIVOS: { type: DataTypes.STRING(150), allowNull: true, defaultValue: null, },
    COM_CORREOCOPIAFAC: { type: DataTypes.STRING(50), allowNull: true, defaultValue: null, },
    COM_CORREOCOPIANC: { type: DataTypes.STRING(50), allowNull: true, defaultValue: null, },
    COM_CORREOCOPIAGRE: { type: DataTypes.STRING(50), allowNull: true, defaultValue: null, },
    COM_CORREOCOPIAND: { type: DataTypes.STRING(50), allowNull: true, defaultValue: null, },
    COM_CORREOCOPIARET: { type: DataTypes.STRING(50), allowNull: true, defaultValue: null, },
    COM_OBLIGADOCONTABILIDAD: { type: DataTypes.STRING(2), allowNull: true, defaultValue: null, },
    COM_CONTRIBUYENTEESPECIAL: { type: DataTypes.STRING(13), allowNull: true, defaultValue: null, },
    COM_CONFORMACION: { type: DataTypes.STRING(3000), allowNull: true, defaultValue: null, },
    COM_FECHACADFIRMAELE: { type: DataTypes.DATE, allowNull: true, defaultValue: null, },
    COM_UBICACIONLOG: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null, },
    COM_SUBSIDIO: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null, },
    COM_UBICACIONXMLAUT: { type: DataTypes.STRING(200), allowNull: true, defaultValue: null, },
    COM_TRANSPORTE: { type: DataTypes.STRING(2), allowNull: true, defaultValue: null, },
    COM_MICROEMPRESA: { type: DataTypes.STRING(2), allowNull: true, defaultValue: null, },
}, {
    timestamps: false,
    freezeTableName: true
});
Empresa.removeAttribute('id');

export default Empresa;