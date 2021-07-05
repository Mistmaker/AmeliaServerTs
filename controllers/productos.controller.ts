import { Request, Response } from "express"
import Producto from "../models/productos";

export const getProductos = async (req: Request, res: Response) => {

    const productos = await Producto.findAll({
        // limit: 2
    });
    res.json(productos);
}

export const getProducto = async (req: Request, res: Response) => {
    const { id } = req.params;

    const producto = await Producto.findByPk(id);

    res.json(producto);
}

export const postProducto = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const pro = await Producto.findByPk(body.ART_CODIGO);

        if (pro) {
            return res.status(403).json({
                msg: `Código ${body.ART_CODIGO} ya está asignado a otro producto`
            });
        }

        body.COM_CODIGO = '01';
        body.ART_NOMBREC = body.ART_NOMBRE;
        body.ART_FLAG = 1;

        const producto = await Producto.create(body);
        await producto.save();
        res.json(producto);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const producto = await Producto.findByPk(id);

        if (!producto) {
            return res.status(404).json({
                msg: 'No existe el producto con el id ' + id
            });
        }

        await producto.update(body);
        res.json(producto);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deleteProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);

        if (!producto) {
            return res.status(404).json({
                msg: 'No existe el producto con el id ' + id
            });
        }

        await producto.destroy();
        res.json(producto);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}