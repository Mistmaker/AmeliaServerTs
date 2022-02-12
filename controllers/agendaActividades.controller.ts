import { Request, Response } from "express"
import AgendaActividad from '../models/agendaActividad.model';
import { col, fn, literal, Op } from "sequelize";
import ComentarioAgendaActividad from '../models/comentariosAgenda.model';
import dayjs from 'dayjs';
import { Stream } from 'stream';
import UsuarioPerfiles from '../models/usuarioPerfiles';
import Usuario from '../models/usuarios';
import AgendaActividadDocumentos from '../models/agendaActividadDocumentos';
import Actividad from '../models/actividades.model';
import Cliente from '../models/clientes';

export const getAgendaActividades = async (req: Request, res: Response) => {

    const pid = req.header('x-pid');
    const uid = req.header('x-uid');

    const perfil = await UsuarioPerfiles.findByPk(pid);
    let agActividades;

    if (perfil!["PERFIL_CLIENTES"] == 'T') {
        agActividades = await AgendaActividad.findAll({
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
                    ],
                    [
                        literal(`(select count(ADOC_CODIGO) from agenda_actividad_documentos where id_agenda=agenda_actividad.id)`),
                        'documentos'
                    ],
                    [
                        literal(`( month(vence) )`),
                        'mesVence'
                    ]
                ]
            }
        });
    }
    if (perfil!["PERFIL_CLIENTES"] == 'A') {
        agActividades = await AgendaActividad.findAll({
            // limit: 2
            where: {
                [Op.and]: literal(`(SELECT USUARIO FROM ven_maecliente AS ven_maecliente WHERE ven_maecliente.CLI_CODIGO = agenda_actividad.ruc) = '${uid}' `)
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
                    ],
                    [
                        literal(`(select count(ADOC_CODIGO) from agenda_actividad_documentos where id_agenda=agenda_actividad.id)`),
                        'documentos'
                    ],
                    [
                        literal(`( month(vence) )`),
                        'mesVence'
                    ]
                ]
            }
        });
    }
    res.json(agActividades);
}

export const getAgendaActividadesAdministador = async (req: Request, res: Response) => {

    const pid = req.header('x-pid');
    const uid = req.header('x-uid');

    const usuarios = await Usuario.findAll();
    const agActividades = [];

    for (const usuario of usuarios) {

        const tmpAct: any[] = []; //para evitar error de tipado
        const datos = { usuario: `${usuario.USUAPELLIDO} ${usuario.USUNOMBRE}`, actividades: tmpAct }

        const actividadUsuario = await AgendaActividad.findAll({
            // limit: 2
            where: {
                [Op.and]: literal(`(SELECT USUARIO FROM ven_maecliente AS ven_maecliente WHERE ven_maecliente.CLI_CODIGO = agenda_actividad.ruc) = '${usuario.USUIDENTIFICACION}' `)
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
                    ],
                    [
                        literal(`(select count(ADOC_CODIGO) from agenda_actividad_documentos where id_agenda=agenda_actividad.id)`),
                        'documentos'
                    ],
                    [
                        literal(`( month(vence) )`),
                        'mesVence'
                    ]
                ]
            }
        });

        datos.actividades = actividadUsuario;

        agActividades.push(datos)
    }

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
            ruc: id,
            // [Op.and]: literal(`(SELECT USUARIO FROM ven_maecliente AS ven_maecliente WHERE ven_maecliente.CLI_CODIGO = agenda_actividad.ruc) = '${0}' `)
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
                ],
                [
                    literal(`(select count(ADOC_CODIGO) from agenda_actividad_documentos where id_agenda=agenda_actividad.id)`),
                    'documentos'
                ],
                [
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
        const agenda = await AgendaActividad.sequelize?.query(`call tarea_manual('${body.id_cliente}','${body.id_actividad}','${body.vencimiento}','${body.dias}');`);
        res.json(agenda);
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

export const deleteAgendaActividadCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const result = await AgendaActividad.destroy({
            where: {
                ruc: id,
                estado: 'PENDIENTE',
                periodo: body.periodo,
                creado: body.creado,
                id: {
                    [Op.notIn]: literal(`(
                        SELECT id_agenda
                        FROM comentarios AS comentarios
                        WHERE
                            comentarios.id_agenda = agenda_actividad.id
                    )`)
                }
            }
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const generarAgenda = async (req: Request, res: Response) => {
    const { body } = req;
    const agenda = await AgendaActividad.sequelize!.query(`call generar_agenda('${body.id}','${body.periodo}','${body.fecha}');`);
    res.json(agenda);
}

export const generarAgendaClientes = async (req: Request, res: Response) => {
    const { ids, periodo, fecha } = req.body;

    try {

        const actividades: ActividadContribuyente[] = await Actividad.findAll();
        let tmpActividad: ActividadContribuyente[];
        let tmpActM: ActividadContribuyente[]; // Mensual
        let tmpActA: ActividadContribuyente[]; // Anual
        let tmpActS: ActividadContribuyente[]; // Semestral
        let tmpActR: ActividadContribuyente[]; // Regional

        let tareasIngresar: AgendaActividadModel[] = [];


        for (const id of ids) { // Creando tareas por cada cliente

            const cliente = await Cliente.findByPk(id);

            if (cliente) {

                console.log(cliente.CLI_CODIGO, cliente.CLI_TIPOCLIENTE, periodo, fecha)
                tmpActividad = []; // limpiando antes de cada ciclo
                let perNatural: boolean;
                const date = new Date();

                if (cliente.CLI_TIPOCLIENTE == 1) { tmpActividad = actividades.filter(a => a.pn_no_obligado == 1) }
                if (cliente.CLI_TIPOCLIENTE == 2) { tmpActividad = actividades.filter(a => a.pn_obligado == 1) }
                if (cliente.CLI_TIPOCLIENTE == 3) { tmpActividad = actividades.filter(a => a.pj_con_fin_lucro == 1) }
                if (cliente.CLI_TIPOCLIENTE == 4) { tmpActividad = actividades.filter(a => a.pj_sin_fin_lucro == 1) }

                if (cliente.CLI_TIPOCLIENTE == 1 || cliente.CLI_TIPOCLIENTE == 2) { perNatural = true } else { perNatural = false }

                // cargando mensuales
                tmpActM = tmpActividad.filter(a => a.frecuencia == 'Mensual');
                // cargando anuales
                tmpActA = tmpActividad.filter(a => parseInt(a.frecuencia) > 0);
                // cargando semenestrales
                tmpActS = tmpActividad.filter(a => a.frecuencia == 'Semestral');
                // cargando por region
                tmpActR = tmpActividad.filter(a => a.frecuencia == 'Region');

                // console.log(tmpActM)

                // procesando mensuales
                for (const act of tmpActM) {
                    for (let mes = 1; mes <= 12; mes++) {
                        const diavence = act.vence == 'D' ? +cliente.CLI_VENCE : +act.vence;
                        if (act.condicion == null && cliente.CLI_REGIMENRUC != 'R') {
                            const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                            await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                        }
                        if (act.condicion == 'empleados') {
                            if (cliente.CLI_NUMEROAFILIADOS > 0) {
                                const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                                await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                                // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                            }
                            if ((cliente.CLI_NUMEROAFILIADOS > 0) && cliente.CLI_NUMEROAFILIADOS >= +act.parametro_inicio) {
                                const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                                await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                                // const tar = this.tareas.filter(t => (t.actividad == act.ACT_NOMBRE && t.fecha_aux == `${mesEntrega}-${diavence}-${date.getFullYear()}`));
                                // if (tar.length == 0) { this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`); }
                            }
                        }
                        if (act.condicion == 'decPatrimonial' && cliente.CLI_SUPERAMONTOACTIVOS_DEC_PATR == "S") {
                            const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                            await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                            // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                        }
                        if (act.condicion == 'personanatural' && cliente.CLI_AFILIADOIESS == 'S' && perNatural == true) {
                            const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                            await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                            // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                        }
                        if (act.condicion == 'personanaturalrise' && cliente.CLI_REGIMENRUC == 'R' && perNatural == true) {
                            const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                            await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                            // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                        }
                        if (act.condicion == 'inmueblemunicipio' && cliente.CLI_INMUEBLE_REG_MUNI == 'S') {
                            const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                            await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                            // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                        }
                        if (act.condicion == 'contrataauditoria' && cliente.CLI_CONTRATARAUDITORIASUPER == 'S' && (cliente.TIP_CODIGO == 3)) {
                            const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                            await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                            // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                        }
                    }
                }

                // procesando anuales
                for (const act of tmpActA) {
                    const diavence = act.vence == 'D' ? cliente.CLI_VENCE : +act.vence;
                    const mes = +act.frecuencia;
                    if (act.condicion == null && act.id_padre == null) {
                        const tareasHijas = tmpActA.filter(t => t.id_padre == act.id_actividad);
                        // if (tareasHijas.length > 0) {
                        //   console.log(act.ACT_NOMBRE, tareasHijas);
                        // }
                        const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                        // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, tareasHijas);
                    }
                    if (act.condicion == 'empleados' && act.id_padre == null) {
                        let tareasHijas = tmpActA.filter(t => t.id_padre == act.id_actividad);
                        if (cliente.CLI_NUMEROAFILIADOS > 0 && cliente.CLI_NUMEROAFILIADOS <= 9) {
                            tareasHijas = tareasHijas.filter(th => +th.parametro_fin <= 9)
                        }
                        // console.log('Tareas hijas', tareasHijas);
                        if (cliente.CLI_NUMEROAFILIADOS > 0) {
                            const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                            await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                            // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, tareasHijas);
                        }
                        if ((cliente.CLI_NUMEROAFILIADOS > 0) && cliente.CLI_NUMEROAFILIADOS >= +act.parametro_inicio) {
                            const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                            await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                            // const tar = this.tareas.filter(t => (t.actividad == act.ACT_NOMBRE && t.fecha_aux == `${mesEntrega}-${diavence}-${date.getFullYear()}`));
                            // if (tar.length == 0) { this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, tareasHijas); }
                        }
                    }
                    if (act.condicion == 'decPatrimonial' && cliente.CLI_SUPERAMONTOACTIVOS_DEC_PATR == "S") {
                        const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                        // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                    }
                    if (act.condicion == 'personanatural' && cliente.CLI_AFILIADOIESS == 'S' && perNatural == true) {
                        const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                        // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                    }
                    if (act.condicion == 'personanaturalrise' && cliente.CLI_REGIMENRUC == 'R' && perNatural == true) {
                        const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                        // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                    }
                    if (act.condicion == 'inmueblemunicipio' && cliente.CLI_INMUEBLE_REG_MUNI == 'S') {
                        const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                        // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                    }
                    if (act.condicion == 'contrataauditoria' && cliente.CLI_CONTRATARAUDITORIASUPER == 'S' && (cliente.TIP_CODIGO == 3)) {
                        const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes.toString();
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                        // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                    }

                }

                // procesando semestrales
                for (const act of tmpActS) {

                    const diavence = act.vence == 'D' ? cliente.CLI_VENCE : +act.vence;
                    const mesP1 = '07';
                    const mesP2 = '12';
                    const mesEntrega1 = mesP1.toString().length < 2 ? `0${mesP1}` : mesP1;
                    const mesEntrega2 = mesP2.toString().length < 2 ? `0${mesP2}` : mesP2;

                    if (act.condicion == '') {
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega1, periodo, diavence, date, `${mesEntrega1}-${diavence}-${date.getFullYear()}`, fecha);
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega2, periodo, diavence, date, `${mesEntrega2}-${diavence}-${date.getFullYear()}`, fecha);
                    }
                    if (act.condicion == 'microempresas' && cliente.CLI_MICROEMPRESA != 'NO') {
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega1, periodo, diavence, date, `${mesEntrega1}-${diavence}-${date.getFullYear()}`, fecha);
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega2, periodo, diavence, date, `${mesEntrega2}-${diavence}-${date.getFullYear()}`, fecha);
                    }


                }

                // procesando reginales
                for (const act of tmpActR) {
                    if (act.condicion == 'empleados' && act.id_padre == null) {
                        if (cliente.CLI_NUMEROAFILIADOS > 0) {
                            const diavence = act.vence == 'D' ? cliente.CLI_VENCE : +act.vence;
                            const mes = cliente.CLI_REGION == 'C' ? '03' : '08';
                            const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes;
                            await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                            // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                        }
                    } else {
                        const diavence = act.vence == 'D' ? cliente.CLI_VENCE : +act.vence;
                        const mes = cliente.CLI_REGION == 'C' ? '03' : '08';
                        const mesEntrega = mes.toString().length < 2 ? `0${mes}` : mes;
                        await agregarTarea(tareasIngresar, cliente.CLI_CODIGO, act, mesEntrega, periodo, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`, fecha);
                        // this.agregarTarea(act, mes, diavence, date, `${mesEntrega}-${diavence}-${date.getFullYear()}`);
                    }
                }

            }

        }

        // console.log(tareasIngresar)
        const t = await AgendaActividad.bulkCreate(tareasIngresar);
        // await t.save();


        res.status(200).json('Ok');

    } catch (error) {
        console.log('Error:', error);
        return res.status(500).json({ msg: "Ocurrió un error, contactese con el proveedor", error });
    }
}

export const getDocumentos = async (req: any, res: Response) => {
    const { id } = req.params;

    const documentos = await AgendaActividadDocumentos.findAll({
        where: {
            id_agenda: id
        },
        attributes: ['ADOC_CODIGO', 'id_agenda', 'id_usuario', 'ADOC_NOMBRE', 'ADOC_SIZE', 'ADOC_TIPO', 'ADOC_FECHA', 'ADOC_COMENTARIO']
    });
    res.status(200).json(documentos);
}

export const postDocumento = async (req: any, res: Response) => {


    if (req.files == undefined || req.files == null) {
        return res.status(400).send(`You must upload a file.`);
    }
    if (req.files?.current == undefined || req.files?.current == null) {
        return res.status(400).send(`You must upload a file.`);
    }

    console.log(req.body)
    // if (req.files.current.length > 0) {
    const data = {
        ADOC_CODIGO: 0,
        id_agenda: req.body.idAgenda,
        id_usuario: req.body.idUsuario,
        ADOC_NOMBRE: req.files.current.name.replace(`.${req.files.current.name.split('.').pop()}`, ''),
        ADOC_DATOS: req.files.current.data,
        ADOC_SIZE: req.files.current.size / 1024,
        ADOC_TIPO: req.files.current.name.split('.').pop(),
        ADOC_MIMETYPE: req.files.current.mimetype,
        ADOC_FECHA: req.body.fecha,
        ADOC_COMENTARIO: req.body.comentarioArchivo,
    }
    //Valid Size
    if ((data.ADOC_SIZE) / (1024) > 15) res.status(400).send('The file size must be less than 15 mb')

    req.files.current.mv(`${__dirname}/public/${req.body.filename}.jpg`, { mkdirp: true }, (err: any) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ file: `public/${req.body.filename}.jpg` });
    });

    try {
        const documento = await AgendaActividadDocumentos.create(data);
        await documento.save();
        res.json(documento);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error,
        });
    }

    // }
}

export const getDocumento = async (req: any, res: Response) => {
    const { id } = req.params;
    const documento = await AgendaActividadDocumentos.findByPk(id);
    if (documento) {
        let tmpDoc: any = documento;
        let docs = {
            ADOC_DATOS: tmpDoc["ADOC_DATOS"].toString('base64'),
        }
        res.json(docs);
    } else {
        res.json(documento);
    }
}

export const downloadDocumento = async (req: Request, res: Response) => {
    const { id } = req.params;
    const documento = await AgendaActividadDocumentos.findByPk(id).then((file: any) => {
        var fileContents = Buffer.from(file.ADOC_DATOS, "base64");
        var readStream = new Stream.PassThrough();
        readStream.end(fileContents);

        res.set('Content-disposition', `attachment; filename=${file.ADOC_NOMBRE}.${file.ADOC_TIPO}`);
        res.set('Content-Type', file.ADOC_TIPO);

        readStream.pipe(res);
    }).catch(err => {
        res.json({ msg: 'Error', detail: err });
    });
};

export const deleteDocumentos = async (req: any, res: Response) => {
    const { id } = req.params;
    const documentos = await AgendaActividadDocumentos.destroy({
        where: {
            ADOC_CODIGO: id
        }
    });
    res.status(200).json(documentos);
}

const agregarTarea = async (tareas: AgendaActividadModel[], ruc: string, act: ActividadContribuyente, mes: string, periodo: number, diavence: number, date: Date, fecha: string, fechaCreado: string) => {

    const existe = await AgendaActividad.findOne({
        where: {
            ruc: ruc,
            id_actividad: act.id_actividad,
            periodo: periodo,
            mes: mes.toString(),
        }
    });
    // console.log(existe)
    if (existe) { return; }

    const existe2 = tareas.filter(t => { return t.ruc == ruc && t.id_actividad == act.id_actividad && t.periodo == periodo.toString() && t.mes == mes.toString() })
    // console.log(ruc, act.id_actividad, periodo, mes, existe2)
    if (existe2.length > 0) { return; }
    // if not exists(select *from agenda_actividad where ruc=v_ruc and id_actividad=v_actividad and periodo=v_periodo and mes=v_mes)then

    let fechaAviso = dayjs(`${periodo}-${mes}-${diavence}`, "YYYY-MM-DD")
    fechaAviso = fechaAviso.subtract(+act.dias, 'day');
    // console.log(`${periodo}-${mes}-${diavence}`, +act.dias) 
    const peridoAviso = fechaAviso.get('year');
    const mesAviso = (fechaAviso.get('month') + 1).toString().length < 2 ? `0${fechaAviso.get('month') + 1}` : (fechaAviso.get('month') + 1).toString();
    const diaAviso = fechaAviso.get('date').toString().length < 2 ? `0${fechaAviso.get('date')}` : fechaAviso.get('date').toString();


    let peridoCalculo = '';
    if (act.frecuencia == 'Mensual') {
        let peridoCalculoMensual = dayjs(`${periodo}-${mes}-${diavence}`, "YYYY-MM-DD");
        peridoCalculoMensual = peridoCalculoMensual.subtract(1, 'month');
        peridoCalculo = `${peridoCalculoMensual.get('year')}-${(peridoCalculoMensual.get('month') + 1).toString().length < 2 ? `0${peridoCalculoMensual.get('month') + 1}` : (peridoCalculoMensual.get('month') + 1).toString()}`;
    }
    else if (act.frecuencia == 'Semestral') {
        peridoCalculo = mes == '07' ? `Segundo Periodo ${periodo - 1}` : `Primer Periodo ${periodo}`;
    }
    else if (+act.frecuencia > 0) {
        peridoCalculo = `${periodo - 1}`;
    }

    const nuevaTareaAgenga: AgendaActividadModel = {
        id: 0,
        ruc: ruc,
        id_actividad: act.id_actividad,
        creado: fechaCreado,
        vence: `${periodo}-${mes}-${diavence}`,
        mes: mes.toString(),
        estado: 'PENDIENTE',
        fecha_aviso: `${peridoAviso}-${mesAviso}-${diaAviso}`,
        periodo: periodo.toString(),
        periodo_calculo: peridoCalculo,
    }


    const fechaTarea = dayjs(`${periodo}-${mes}-${diavence}`)
    const fCreado = dayjs(fechaCreado);

    if (fechaTarea > fCreado) {
        tareas.push(nuevaTareaAgenga)
    }

    // console.log(nuevaTareaAgenga)
    // const t = await AgendaActividad.create(nuevaTareaAgenga);
    // await t.save();

}

export class ActividadContribuyente {
    id_actividad!: number;
    id_padre!: number;
    entidad!: string;
    actividad!: string;
    condicion!: string;
    condicion_dos!: string;
    parametro_inicio!: string;
    parametro_fin!: string;
    dias!: string;
    frecuencia!: string;
    vence!: string;
    pn_obligado!: number;
    pn_no_obligado!: number;
    pj_sin_fin_lucro!: number;
    pj_con_fin_lucro!: number;
    editable!: string;
    nombreEntidad!: string;
}

export class AgendaActividadModel {
    id!: number;
    ruc!: string;
    id_actividad!: number;
    creado!: string;
    vence!: string;
    mes!: string;
    estado!: string;
    fecha_aviso!: string;
    periodo!: string;
    periodo_calculo!: string;
}