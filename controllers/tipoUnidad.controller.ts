import { Request, Response } from "express"
import { Op } from "sequelize";
import UnidadProducto from "../models/tipoUnidad";

export const getUnidadesProducto = async (req: Request, res: Response) => {

    const clientes = await UnidadProducto.findAll({
        limit: 100
    });
    res.json(clientes);
}