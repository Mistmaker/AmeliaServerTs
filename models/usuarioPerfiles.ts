import { DataTypes } from 'sequelize';
import db from '../db/connection';

const UsuarioPerfiles = db.define('seg_maeperfil', {
    PERFIL_CODIGO: { type: DataTypes.STRING(10), primaryKey: true, allowNull: false, },
    COM_CODIGO: { type: DataTypes.STRING(2), primaryKey: true, allowNull: false, },
    PERFIL_NOMBRE: { type: DataTypes.STRING(100), allowNull: false, },
}, {
    timestamps: false,
    freezeTableName: true
});
UsuarioPerfiles.removeAttribute('id');

export default UsuarioPerfiles;