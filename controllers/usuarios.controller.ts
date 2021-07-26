import { Request, Response } from "express"
import Usuario from '../models/usuarios';

export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await Usuario.findAll({
        // limit: 2
    });
    res.json(usuarios);
}

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    res.json(usuario);
}

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const usuario = await Usuario.findByPk(body.USUIDENTIFICACION);
        const vendedor = await Usuario.findOne({
            where: {
                VEN_CODIGO: body.VEN_CODIGO
            }
        })

        if (usuario) {
            return res.status(403).json({
                msg: `Nombre de usuario ${body.USUIDENTIFICACION} ya está resgistado`
            });
        }
        if (vendedor) {
            return res.status(403).json({
                msg: `Asesor ${body.USUAPELLIDO} ya tiene un usuario asignado`
            });
        }

        const usu = await Usuario.create(body);
        await usu.save();
        res.json(usu);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe el usuario con el id ' + id
            });
        }

        await usuario.update(body);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe el usuario con el id ' + id
            });
        }

        await usuario.destroy();
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}