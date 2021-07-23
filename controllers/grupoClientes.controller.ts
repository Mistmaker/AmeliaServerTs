import { Request, Response } from "express"
import GrupoCliente from '../models/grupoClientes';

export const getGrupoClientes = async (req: Request, res: Response) => {

    const grupos = await GrupoCliente.findAll({
        // limit: 2
        where: {
            GRU_TIPO: 'CLI'
        }
    });
    res.json(grupos);
}

export const getGrupoCliente = async (req: Request, res: Response) => {
    const { id } = req.params;

    const tipo = await GrupoCliente.findByPk(id);

    res.json(tipo);
}

export const postGrupoCliente = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const grupo = await GrupoCliente.findByPk(body.TPR_ID);

        if (grupo) {
            return res.status(403).json({
                msg: `Código ${body.TPR_ID} ya está asignado a otro grupo`
            });
        }

        const tipoPrecio = await GrupoCliente.create(body);
        await tipoPrecio.save();
        res.json(tipoPrecio);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putGrupoCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const tipo = await GrupoCliente.findByPk(id);

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

export const deleteGrupoCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const tipo = await GrupoCliente.findByPk(id);

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