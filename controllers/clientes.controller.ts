import { Request, Response } from "express"
import { Op, literal } from "sequelize";
import Cliente from "../models/clientes";
import ClienteDatosAdicionales from '../models/clientesDatosAdicionales';
import ClientesDocumentos from '../models/clientesDocumentos';

export const getClientes = async (req: Request, res: Response) => {

    const clientes = await Cliente.findAll({
        limit: 100,
        attributes: {
            include: [
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT GRU_NOMBRE
                        FROM ven_maegrupo AS ven_maegrupo
                        WHERE
                            ven_maegrupo.GRU_TIPO = 'CLI'
                            AND
                            ven_maegrupo.GRU_CODIGO = ven_maecliente.GRU_CODIGO
                    )`),
                    'GrupoCliente'
                ],
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT TIP_NOMBRE
                        FROM ven_maetipocliente AS ven_maetipocliente
                        WHERE
                            ven_maetipocliente.TIP_CODIGO = ven_maecliente.CLI_TIPOCLIENTE
                    )`),
                    'TipoCliente'
                ]
            ]
        },
        order: [
            ['CLI_VENCE', 'ASC']
        ]
    });
    res.json(clientes);
}

export const getClientesPorNombre = async (req: Request, res: Response) => {

    const { body } = req;

    const clientes = await Cliente.findAll({
        where: {
            [Op.or]: [
                {
                    CLI_NOMBRE: {
                        [Op.like]: '%' + body.nombre + '%'
                    }
                },
                {
                    CLI_NOMBREC: {
                        [Op.like]: '%' + body.nombre + '%'
                    }
                },
                {
                    CLI_RUCIDE: {
                        [Op.like]: '%' + body.nombre + '%'
                    }
                }
            ]
        },
        attributes: {
            include: [
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT GRU_NOMBRE
                        FROM ven_maegrupo AS ven_maegrupo
                        WHERE
                            ven_maegrupo.GRU_TIPO = 'CLI'
                            AND
                            ven_maegrupo.GRU_CODIGO = ven_maecliente.GRU_CODIGO
                    )`),
                    'GrupoCliente'
                ],
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT TIP_NOMBRE
                        FROM ven_maetipocliente AS ven_maetipocliente
                        WHERE
                            ven_maetipocliente.TIP_CODIGO = ven_maecliente.CLI_TIPOCLIENTE
                    )`),
                    'TipoCliente'
                ]
            ]
        },
        limit: 100,
        order: [
            ['CLI_VENCE', 'ASC']
        ]
    });
    res.json(clientes);
}

export const getClientesPorVence = async (req: Request, res: Response) => {

    const { body } = req;

    const clientes = await Cliente.findAll({
        where: {
            CLI_VENCE: body.vence
        },
        attributes: {
            include: [
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT GRU_NOMBRE
                        FROM ven_maegrupo AS ven_maegrupo
                        WHERE
                            ven_maegrupo.GRU_TIPO = 'CLI'
                            AND
                            ven_maegrupo.GRU_CODIGO = ven_maecliente.GRU_CODIGO
                    )`),
                    'GrupoCliente'
                ]
            ]
        },
        order: [
            ['CLI_VENCE', 'ASC']
        ]
    });
    res.json(clientes);
}

export const getClientesPorGrupo = async (req: Request, res: Response) => {

    const { body } = req;

    const clientes = await Cliente.findAll({
        where: {
            GRU_CODIGO: body.gruCodigo
        },
        attributes: {
            include: [
                [
                    // Note the wrapping parentheses in the call below!
                    literal(`(
                        SELECT GRU_NOMBRE
                        FROM ven_maegrupo AS ven_maegrupo
                        WHERE
                            ven_maegrupo.GRU_TIPO = 'CLI'
                            AND
                            ven_maegrupo.GRU_CODIGO = ven_maecliente.GRU_CODIGO
                    )`),
                    'GrupoCliente'
                ]
            ]
        }
    });
    res.json(clientes);
}

export const getCliente = async (req: Request, res: Response) => {
    const { id } = req.params;

    const cliente = await Cliente.findByPk(id);

    res.json(cliente);
}

export const getClientePorRuc = async (req: Request, res: Response) => {
    const { id } = req.params;

    const cliente = await Cliente.findOne({
        where: {
            CLI_RUC: id
        }
    });

    res.json(cliente);
}

export const postCliente = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const cli = await Cliente.findByPk(body.CLI_CODIGO);

        if (cli) {
            return res.status(403).json({
                msg: `Número de identificación ${body.CLI_CODIGO} ya está asignado a otro cliente`
            });
        }

        body.CLI_RUCIDE = body.CLI_CODIGO;
        body.GRU_CODIGO = '01';
        body.COM_CODIGO = '01';
        body.GRU_TIPO = 'CLI';
        body.CLI_FLAG = 1;
        // body.CLI_NOMBREC = body.CLI_NOMBRE;

        const cliente = await Cliente.create(body);

        if (body.datosAdicionales.length > 0) {
            const datosAdicionales = {
                id: 0,
                CLI_CODIGO: body.CLI_CODIGO,
                COM_CODIGO: body.COM_CODIGO,
                ...body.datosAdicionales[0]
            }
            const datos = ClienteDatosAdicionales.create(datosAdicionales);
            (await datos).save();
        }

        await cliente.save();
        res.json(cliente);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({
                msg: 'No existe el cliente con el id ' + id
            });
        }

        // body.CLI_NOMBREC = body.CLI_NOMBRE;

        await cliente.update(body);

        if (body.datosAdicionales.length > 0) {
            await ClienteDatosAdicionales.destroy({
                where: {
                    [Op.and]: [{
                        CLI_CODIGO: body.CLI_CODIGO,
                        COM_CODIGO: body.COM_CODIGO,
                    }]
                }
            });


            for (const dato of body.datosAdicionales) {
                const datosAdicionales = {
                    id: 0,
                    CLI_CODIGO: body.CLI_CODIGO,
                    COM_CODIGO: body.COM_CODIGO,
                    ...dato
                }
                const datos = ClienteDatosAdicionales.create(datosAdicionales);
                (await datos).save();
            }


        }

        res.json(cliente);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deleteCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({
                msg: 'No existe el cliente con el id ' + id
            });
        }

        await ClienteDatosAdicionales.destroy({
            where: { CLI_CODIGO: id }
        });

        await ClientesDocumentos.destroy({
            where: { CLI_CODIGO: id }
        });

        await cliente.destroy();
        res.json(cliente);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}