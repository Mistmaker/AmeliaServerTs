import { Request, Response } from "express"
import { Op } from "sequelize";
import ClienteDatosAdicionales from '../models/clientesDatosAdicionales';

export const getDatos = async (req: Request, res: Response) => {

    const datos = await ClienteDatosAdicionales.findAll({
        limit: 100
    });
    res.json(datos);
}

export const getDato = async (req: Request, res: Response) => {
    const { id } = req.params;

    const dato = await ClienteDatosAdicionales.findByPk(id);

    res.json(dato);
}

export const getDatosPorRuc = async (req: Request, res: Response) => {

    const { body } = req;

    const dato = await ClienteDatosAdicionales.findAll({
        where: {
            [Op.and]:[{
                CLI_CODIGO: body.CLI_CODIGO,
                COM_CODIGO: body.COM_CODIGO,
            }]
        }
    });

    res.json(dato);
}

export const postDatos = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        body.CLI_RUCIDE = body.CLI_CODIGO;

        const datos = await ClienteDatosAdicionales.create(body);
        await datos.save();
        res.json(datos);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putDato = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const dato = await ClienteDatosAdicionales.findByPk(id);

        if (!dato) {
            return res.status(404).json({
                msg: 'No existe el cliente con el id ' + id
            });
        }

        // body.CLI_NOMBREC = body.CLI_NOMBRE;

        await dato.update(body);
        res.json(dato);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deleteDato = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const dato = await ClienteDatosAdicionales.findByPk(id);

        if (!dato) {
            return res.status(404).json({
                msg: 'No existe el registro '
            });
        }

        await dato.destroy();
        res.json(dato);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}