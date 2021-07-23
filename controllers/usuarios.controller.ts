import { Request, Response } from "express"
import Usuario from '../models/usuarios';

export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await Usuario.findAll({
        // limit: 2
    });
    res.json(usuarios);
}

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    const tipo = await Usuario.findByPk(id);

    res.json(tipo);
}

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const grupo = await Usuario.findByPk(body.TPR_ID);

        if (grupo) {
            return res.status(403).json({
                msg: `Código ${body.TPR_ID} ya está asignado a otro grupo`
            });
        }

        const tipoPrecio = await Usuario.create(body);
        await tipoPrecio.save();
        res.json(tipoPrecio);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const tipo = await Usuario.findByPk(id);

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

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const tipo = await Usuario.findByPk(id);

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