import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Ciudad from '../models/ciudades';

export const getCiudades = async (req: Request, res: Response) => {
  const cities = await Ciudad.findAll();
  res.json(cities);
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
