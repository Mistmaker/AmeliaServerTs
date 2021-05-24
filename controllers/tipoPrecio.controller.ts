import { Request, Response } from "express"
import TipoPrecio from "../models/tipoPrecio";

export const getTiposPrecios = async (req: Request, res: Response) => {

    const tipos = await TipoPrecio.findAll({
        // limit: 2
    });
    res.json(tipos);
}

export const getTipoPrecio = async (req: Request, res: Response) => {
    const { id } = req.params;

    const tipo = await TipoPrecio.findByPk(id);

    res.json(tipo);
}

export const postTipoPrecio = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const grupo = await TipoPrecio.findByPk(body.GRUP_CODIGO);

        if (grupo) {
            return res.status(403).json({
                msg: `Código ${body.GRUP_CODIGO} ya está asignado a otro grupo`
            });
        }

        const tipoPrecio = await TipoPrecio.create(body);
        await tipoPrecio.save();
        res.json(tipoPrecio);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putTipoPrecio = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const tipo = await TipoPrecio.findByPk(id);

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

export const deleteTipoPrecio = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const tipo = await TipoPrecio.findByPk(id);

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