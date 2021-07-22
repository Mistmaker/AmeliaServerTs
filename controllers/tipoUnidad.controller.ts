import { Request, Response } from "express"
import { Op } from "sequelize";
import UnidadProducto from "../models/tipoUnidad";

export const getUnidadesProducto = async (req: Request, res: Response) => {

    const unidades = await UnidadProducto.findAll({
        limit: 100
    });
    res.json(unidades);
}

export const getUnidadProducto = async (req: Request, res: Response) => {

    const { id } = req.params;

    const unidad = await UnidadProducto.findByPk(id);

    res.json(unidad);
}

export const getUnidadProductosByNombre = async (req: Request, res: Response) => {
    const { body } = req;
  
    const unidades = await UnidadProducto.findAll({
      where: {
        [Op.or]: [
          {
            UNI_NOMBRE: {
              [Op.like]: '%' + body.name + '%',
            },
          },
          {
            UNI_SIMBOLO: {
              [Op.like]: '%' + body.name + '%',
            },
          },
        ],
      },
      limit: 100,
    });
  
    res.json(unidades);
};

export const postUnidadProducto = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const tipoUnidad = await UnidadProducto.findByPk(body.UNI_CODIGO);

        if (tipoUnidad) {
            return res.status(403).json({
                msg: `Código ${body.UNI_CODIGO} ya está asignado a otra unidad`
            });
        }
        body.COM_CODIGO = '01';

        const unidad = await UnidadProducto.create(body);
        await unidad.save();
        res.json(unidad);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }
}


export const putUnidadProducto = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const unidad = await UnidadProducto.findByPk(id);

        if (!unidad) {
            return res.status(404).json({
                msg: 'No existe la unidad con el id ' + id
            });
        }

        await unidad.update(body);
        res.json(unidad);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }
}


export const deleteUnidadProducto = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const unidad = await UnidadProducto.findByPk(id);

        if (!unidad) {
            return res.status(404).json({
                msg: 'No existe el unidad con el id ' + id
            });
        }

        await unidad.destroy();
        res.json(unidad);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }
}