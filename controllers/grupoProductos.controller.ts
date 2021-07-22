import { Op } from 'sequelize';
import { Request, Response } from "express"

import GrupoProducto from "../models/grupoProductos";

export const getGrupoProductos = async (req: Request, res: Response) => {

    const grupos = await GrupoProducto.findAll({
        // limit: 2
    });
    res.json(grupos);
}

export const getGrupoProducto = async (req: Request, res: Response) => {
    const { id } = req.params;

    const grupo = await GrupoProducto.findByPk(id);

    res.json(grupo);
}


export const getGrupoProductosByNombre = async (req: Request, res: Response) => {
    const { body } = req;
  
    const grupos = await GrupoProducto.findAll({
      where: {
        [Op.or]: [
          {
            GRUP_NOMBRE: {
              [Op.like]: '%' + body.name + '%',
            },
          }
        ],
      },
      limit: 100,
    });
  
    res.json(grupos);
};
  

export const postGrupoProducto = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const grupo = await GrupoProducto.findByPk(body.GRUP_CODIGO);

        if (grupo) {
            return res.status(403).json({
                msg: `Código ${body.GRUP_CODIGO} ya está asignado a otro grupo`
            });
        }

        const grupoProducto = await GrupoProducto.create(body);
        await grupoProducto.save();
        res.json(grupoProducto);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putGrupoProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const grupo = await GrupoProducto.findByPk(id);

        if (!grupo) {
            return res.status(404).json({
                msg: 'No existe el grupo con el id ' + id
            });
        }

        await grupo.update(body);
        res.json(grupo);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deleteGrupoProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const grupo = await GrupoProducto.findByPk(id);

        if (!grupo) {
            return res.status(404).json({
                msg: 'No existe el grupo con el id ' + id
            });
        }

        await grupo.destroy();
        res.json(grupo);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}