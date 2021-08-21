import { Request, Response } from "express"
import { literal } from "sequelize";
import Actividad from '../models/actividades.model';
import AgendaActividad from '../models/agendaActividad.model';

export const getActividades = async (req: Request, res: Response) => {

    const actividades = await Actividad.findAll({
        // limit: 2
        attributes: {
            include: [
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT entidad
                        FROM entidad AS entidad
                        WHERE
                        entidad.codigo_entidad = actividad.entidad
                    )`),
                    'nombreEntidad'
                ]
            ]
        }
    });
    res.json(actividades);
}

export const getActividad = async (req: Request, res: Response) => {
    const { id } = req.params;

    const actividad = await Actividad.findByPk(id);

    res.json(actividad);
}

export const postActividad = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const actividad = await Actividad.findByPk(body.id_actividad);

        if (actividad) {
            return res.status(403).json({
                msg: `Actividad con código ${body.id_actividad} ya está resgistada`
            });
        }

        const acti = await Actividad.create(body);
        await acti.save();
        res.json(acti);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putActividad = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const actividad = await Actividad.findByPk(id);

        if (!actividad) {
            return res.status(404).json({
                msg: 'No existe la actividad con el id ' + id
            });
        }

        await actividad.update(body);
        res.json(actividad);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deleteActividad = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const actividad = await Actividad.findByPk(id);
        if (!actividad) {
            return res.status(404).json({
                msg: 'No existe la actividad con el id ' + id
            });
        }
        const agenda = await AgendaActividad.findAll({ where: { id_actividad: id } });
        if (agenda.length > 0) {
            return res.status(404).json({
                msg: 'La actividad esta incliuda en las tareas de un cliente, borre los registros del directorio antes de proceder.'
            });
        }

        await actividad.destroy();
        res.json(actividad);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}