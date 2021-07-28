import { Request, Response } from "express"
import UsuarioPerfiles from '../models/usuarioPerfiles';

export const getPerfiles = async (req: Request, res: Response) => {

    const perfiles = await UsuarioPerfiles.findAll({
        // limit: 2
    });
    res.json(perfiles);
}

export const getPerfil = async (req: Request, res: Response) => {
    const { id } = req.params;

    const perfil = await UsuarioPerfiles.findByPk(id);

    res.json(perfil);
}

export const postPerfil = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const perfil = await UsuarioPerfiles.findByPk(body.USUIDENTIFICACION);

        if (perfil) {
            return res.status(403).json({
                msg: `Perfil con código ${body.USUIDENTIFICACION} ya está resgistado`
            });
        }

        const perf = await UsuarioPerfiles.create(body);
        await perf.save();
        res.json(perf);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putPerfil = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const perfil = await UsuarioPerfiles.findByPk(id);

        if (!perfil) {
            return res.status(404).json({
                msg: 'No existe el perfil con el id ' + id
            });
        }

        await perfil.update(body);
        res.json(perfil);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deletePerfil = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const perfil = await UsuarioPerfiles.findByPk(id);

        if (!perfil) {
            return res.status(404).json({
                msg: 'No existe el perfil con el id ' + id
            });
        }

        await perfil.destroy();
        res.json(perfil);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}