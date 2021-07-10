import { Request, Response } from 'express';
import { json, Op } from 'sequelize';
import Ciudad from '../models/ciudades';

export const getCiudades = async (req: Request, res: Response) => {
  const cities = await Ciudad.findAll();
  res.json(cities);
};

export const getProvincias = async (req: Request, res: Response) => {
  const provincias = await Ciudad.findAll({
    where: {
      UBIGEO_NIVEL: 1,
    },
  });

  res.json(provincias);
};

export const getCantonesByProvincia = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cantones = await Ciudad.findAll({
    where: {
      [Op.and]: [
        {
          UBIGEO_CODIGO: {
            [Op.like]: id + '%',
          },
        },
        {
          UBIGEO_NIVEL: 2,
        },
      ],
    },
  });

  res.json(cantones);
};

export const getCiudadesByName = async (req: Request, res: Response) => {
  const { body } = req;

  const cities = await Ciudad.findAll({
    where: {
      [Op.or]: [
        {
          UBIGEO_NOMBRE: {
            [Op.like]: '%' + body.name + '%',
          },
        },
      ],
    },
    limit: 100,
  });

  res.json(cities);
};
