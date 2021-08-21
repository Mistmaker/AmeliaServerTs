import { Request, Response } from "express"
import Entidad from '../models/entidades.model';

export const getEntidades= async (req: Request, res: Response) => {

    const entidades = await Entidad.findAll({
        // limit: 2
    });
    res.json(entidades);
}

export const getEntidad = async (req: Request, res: Response) => {
    const { id } = req.params;

    const entidad = await Entidad.findByPk(id);

    res.json(entidad);
}

export const postEntidad = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const entidad = await Entidad.findByPk(body.id);

        if (entidad) {
            return res.status(403).json({
                msg: `Actividad con código ${body.id} ya está resgistada`
            });
        }

        const ent = await Entidad.create(body);
        await ent.save();
        res.json(ent);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putEntidad = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const entidad = await Entidad.findByPk(id);

        if (!entidad) {
            return res.status(404).json({
                msg: 'No existe la actividad con el id ' + id
            });
        }

        await entidad.update(body);
        res.json(entidad);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deleteEntidad = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const entidad = await Entidad.findByPk(id);

        if (!entidad) {
            return res.status(404).json({
                msg: 'No existe la actividad con el id ' + id
            });
        }

        await entidad.destroy();
        res.json(entidad);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}