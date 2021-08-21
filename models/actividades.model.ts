import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Actividad = db.define('actividad', {
    id_actividad: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
    entidad: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    actividad: { type: DataTypes.STRING(200), allowNull: true, defaultValue: null, },
    condicion: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    condicion_dos: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    parametro_inicio: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    parametro_fin: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    dias: { type: DataTypes.STRING(10), allowNull: true, defaultValue: null, },
    frecuencia: { type: DataTypes.STRING(45), allowNull: true, defaultValue: null, },
    vence: { type: DataTypes.STRING(4), allowNull: true, defaultValue: null, },
    pn_empleado: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pn_rise: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pn_no_obligado: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pn_no_obligado_semestral: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pn_obligado: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pj_sa: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pj_cia_ltda: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pj_sin_fin_lucro: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pj_seps_finan: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pj_seps_no_finan: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
}, {
    timestamps: false,
    freezeTableName: true
});

export default Actividad;