import { Request, Response } from "express"
import AgendaActividad from '../models/agendaActividad.model';
import { col, fn, literal } from "sequelize";
import ComentarioAgendaActividad from '../models/comentariosAgenda.model';

export const getAgendaActividades = async (req: Request, res: Response) => {

    const agActividades = await AgendaActividad.findAll({
        // limit: 2
        attributes: {
            include: [
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT actividad
                        FROM actividad AS actividad
                        WHERE
                            actividad.id_actividad = agenda_actividad.id_actividad
                    )`),
                    'actividad'
                ],
                [
                    literal(`(
                            IF(agenda_actividad.vence<curdate() and agenda_actividad.estado='PENDIENTE' ,'VENCIDO',
                            IF(agenda_actividad.vence>curdate() and agenda_actividad.fecha_aviso<=curdate() and agenda_actividad.estado='PENDIENTE','PENDIENTE',
                            IF(agenda_actividad.vence=curdate() and agenda_actividad.estado='PENDIENTE','HOY',
                            IF(agenda_actividad.vence>curdate() and agenda_actividad.fecha_aviso>curdate() and agenda_actividad.estado='PENDIENTE','PROXIMO','SOLUCIONADO')))) 
                    )`),
                    'ESCAT'
                ],
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT CLI_NOMBRE
                        FROM ven_maecliente AS ven_maecliente
                        WHERE
                            ven_maecliente.CLI_CODIGO = agenda_actividad.ruc
                    )`),
                    'cliente'
                ],
                [
                    literal(`(select count(comentario) from comentarios where id_agenda=agenda_actividad.id)`),
                    'comentarios'
                ],[
                    literal(`( month(vence) )`),
                    'mesVence'
                ]
            ]
        }
    });
    res.json(agActividades);
}

export const getActividadesGeneradas = async (req: Request, res: Response) => {

    const agActividades = await AgendaActividad.findAll({
        // limit: 2
        attributes: [
            [fn('DISTINCT', col('ruc')), 'ruc'],
            'creado', 'periodo',
            [
                // Note the wrapping parentheses in the call below!
                literal(`(
                    SELECT CLI_NOMBRE
                    FROM ven_maecliente AS ven_maecliente
                    WHERE
                        ven_maecliente.CLI_CODIGO = agenda_actividad.ruc
                )`),
                'cliente'
            ]

        ]
    });
    res.json(agActividades);
}

export const getEstadoActividades = async (req: Request, res: Response) => {

    const vencidos: any = await AgendaActividad.sequelize?.query(`SELECT count(id) as vencidos FROM agenda_actividad where vence<curdate() and estado='PENDIENTE'`);
    const pendientes: any = await AgendaActividad.sequelize?.query(`SELECT count(id) as pendientes FROM agenda_actividad where vence>curdate() and fecha_aviso<=curdate() and estado='PENDIENTE'`);
    const hoy: any = await AgendaActividad.sequelize?.query(`SELECT count(id) as hoy FROM agenda_actividad where vence=curdate() and estado='PENDIENTE'`);
    const proximos: any = await AgendaActividad.sequelize?.query(`SELECT count(id) as proximos FROM agenda_actividad where vence>curdate()`);

    res.json({
        vencidos: vencidos![0][0].vencidos,
        pendientes: pendientes![0][0].pendientes,
        hoy: hoy![0][0].hoy,
        proximos: proximos![0][0].proximos
    })

}

export const getAgendaActividad = async (req: Request, res: Response) => {
    const { id } = req.params;
    const agActividad = await AgendaActividad.findByPk(id);
    res.json(agActividad);
}

export const getAgendaActividadCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const agActividad = await AgendaActividad.findAll({
        where: {
            ruc: id
        },
        attributes: {
            include: [
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT actividad
                        FROM actividad AS actividad
                        WHERE
                            actividad.id_actividad = agenda_actividad.id_actividad
                    )`),
                    'actividad'
                ],
                [
                    literal(`(
                            IF(agenda_actividad.vence<curdate() and agenda_actividad.estado='PENDIENTE' ,'VENCIDO',
                            IF(agenda_actividad.vence>curdate() and agenda_actividad.fecha_aviso<=curdate() and agenda_actividad.estado='PENDIENTE','PENDIENTE',
                            IF(agenda_actividad.vence=curdate() and agenda_actividad.estado='PENDIENTE','HOY',
                            IF(agenda_actividad.vence>curdate() and agenda_actividad.fecha_aviso>curdate() and agenda_actividad.estado='PENDIENTE','PROXIMO','SOLUCIONADO')))) 
                    )`),
                    'ESCAT'
                ],
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT CLI_NOMBRE
                        FROM ven_maecliente AS ven_maecliente
                        WHERE
                            ven_maecliente.CLI_CODIGO = agenda_actividad.ruc
                    )`),
                    'cliente'
                ],
                [
                    literal(`(select count(comentario) from comentarios where id_agenda=agenda_actividad.id)`),
                    'comentarios'
                ],[
                    literal(`( month(vence) )`),
                    'mesVence'
                ]
            ]
        }
    });
    res.json(agActividad);
}

export const postAgendaActividad = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const agActividad = await AgendaActividad.findByPk(body.id);

        if (agActividad) {
            return res.status(403).json({
                msg: `Actividad con código ${body.id} ya está resgistada`
            });
        }

        const agAct = await AgendaActividad.create(body);
        await agAct.save();
        res.json(agAct);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putAgendaActividad = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const agActividad = await AgendaActividad.findByPk(id);

        if (!agActividad) {
            return res.status(404).json({
                msg: 'No existe la actividad con el id ' + id
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

export const deleteAgendaActividad = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const agActividad = await AgendaActividad.findByPk(id);

        if (!agActividad) {
            return res.status(404).json({
                msg: 'No existe la actividad con el id ' + id
            });
        }

        await ComentarioAgendaActividad.destroy({
            where: { id_agenda: id }
        });

        await agActividad.destroy();
        res.json(agActividad);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const generarAgenda = async (req: Request, res: Response) => {
    const { body } = req;
    const agenda = await AgendaActividad.sequelize?.query(`call generar_agenda('${body.id}','${body.periodo}','${body.fecha}');`);
    console.log(agenda);
    res.json(agenda);
}
