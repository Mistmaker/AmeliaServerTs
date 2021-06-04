import { Request, Response } from "express"
import TipoCliente from "../models/tipoCliente";

export const getTiposClientes = async (req: Request, res: Response) => {

    const tipos = await TipoCliente.findAll({
        // limit: 2
    });
    res.json(tipos);
}

export const getTipoCliente = async (req: Request, res: Response) => {
    const { id } = req.params;

    const tipo = await TipoCliente.findByPk(id);

    res.json(tipo);
}

export const postTipoCliente = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const grupo = await TipoCliente.findByPk(body.TCL_CODIGO);

        if (grupo) {
            return res.status(403).json({
                msg: `Código ${body.TCL_CODIGO} ya está asignado a otro grupo`
            });
        }

        const tipoPrecio = await TipoCliente.create(body);
        await tipoPrecio.save();
        res.json(tipoPrecio);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putTipoCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const tipo = await TipoCliente.findByPk(id);

        if (!tipo) {
            return res.status(404).json({
                msg: 'No existe el grupo con el id ' + id
            });
        }

        await tipo.update(body);
        res.json(tipo);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deleteTipoCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const tipo = await TipoCliente.findByPk(id);

        if (!tipo) {
            return res.status(404).json({
                msg: 'No existe el grupo con el id ' + id
            });
        }

        await tipo.destroy();
        res.json(tipo);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}