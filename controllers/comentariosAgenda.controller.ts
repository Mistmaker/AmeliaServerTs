import { Request, Response } from "express"
import ComentarioAgendaActividad from '../models/comentariosAgenda.model';

export const getComentariosAgenda = async (req: Request, res: Response) => {

    const agActividades = await ComentarioAgendaActividad.findAll({
        // limit: 2
    });
    res.json(agActividades);
}

export const getComentariosAgendaPorActividad = async (req: Request, res: Response) => {
    const { id } = req.params;

    const agActividad = await ComentarioAgendaActividad.findAll({
        where: {
            id_agenda: id
        }
    });

    res.json(agActividad);
}

export const getComentarioAgenda = async (req: Request, res: Response) => {
    const { id } = req.params;

    const agActividad = await ComentarioAgendaActividad.findByPk(id);

    res.json(agActividad);
}

export const postComentarioAgenda = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const agActividad = await ComentarioAgendaActividad.findByPk(body.id);

        if (agActividad) {
            return res.status(403).json({
                msg: `Comentario con código ${body.id} ya está resgistado`
            });
        }

        const agAct: any = await ComentarioAgendaActividad.create(body);
        await agAct.save();
        agAct.id = agAct.null;
        res.json(agAct);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putComentarioAgenda = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const agActividad = await ComentarioAgendaActividad.findByPk(id);

        if (!agActividad) {
            return res.status(404).json({
                msg: 'No existe el comentario con el id ' + id
            });
        }

        await agActividad.update(body);
        res.json(agActividad);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deleteComentarioAgenda = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const agActividad = await ComentarioAgendaActividad.findByPk(id);

        if (!agActividad) {
            return res.status(404).json({
                msg: 'No existe el comentario con el id ' + id
            });
        }

        await agActividad.destroy();
        res.json(agActividad);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}