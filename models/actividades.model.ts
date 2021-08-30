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
    pn_obligado: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pn_no_obligado: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pj_sin_fin_lucro: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    pj_con_fin_lucro: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },
    editable: { type: DataTypes.STRING(1), allowNull: true, defaultValue: null, },

}, {
    timestamps: false,
    freezeTableName: true
});

export default Actividad;