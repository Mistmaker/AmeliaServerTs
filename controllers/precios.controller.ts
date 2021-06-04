import { Request, Response } from "express"
import Precio from "../models/precios";

export const getPrecios = async (req: Request, res: Response) => {

    const precios = await Precio.findAll({
        // limit: 2
    });
    res.json(precios);
}

export const getPreciosPorIdProducto = async (req: Request, res: Response) => {

    const { id } = req.params;

    const precios = await Precio.findAll({
        where: {
            ART_CODIGO : id
        }
    });
    res.json(precios);
}

export const getPrecio = async (req: Request, res: Response) => {
    const { id } = req.params;

    const precio = await Precio.findByPk(id);

    res.json(precio);
}

export const postPrecio = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const pre = await Precio.findByPk(body.ARTPRE_CODIGO);

        if (pre) {
            return res.status(403).json({
                msg: `Código ${body.ARTPRE_CODIGO} ya está asignado a otro grupo`
            });
        }

        const precio = await Precio.create(body);
        await precio.save();
        res.json(precio);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putPrecio = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const precio = await Precio.findByPk(id);

        if (!precio) {
            return res.status(404).json({
                msg: 'No existe el grupo con el id ' + id
            });
        }

        await precio.update(body);
        res.json(precio);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deletePrecio = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const precio = await Precio.findByPk(id);

        if (!precio) {
            return res.status(404).json({
                msg: 'No existe el grupo con el id ' + id
            });
        }

        await precio.destroy();
        res.json(precio);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}