import { Request, Response } from 'express';
import { Op } from 'sequelize';
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

export const getCiudadesByNombre = async (req: Request, res: Response) => {
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

export const getCiudad = async (req: Request, res: Response) => {
  const { id } = req.params;

  const ciudad = await Ciudad.findOne({
    where: {
      UBIGEO_CODIGO: id,
    },
  });

  res.json(ciudad);
};

export const postCiudad = async (req: Request, res: Response) => {
  const { body } = req;

  console.log(body);

  try {
    const ciudad = await Ciudad.findOne({
      where: {
        UBIGEO_CODIGO: body.UBIGEO_CODIGO,
      },
    });

    body.COM_CODIGO = '01';

    if (ciudad) {
      return res.status(403).json({
        msg: `Código ${body.UBIGEO_CODIGO} ya está asignado a otra ciudad`,
      });
    }

    const newCiudad = await Ciudad.create(body);
    await newCiudad.save();
    res.json(newCiudad);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const putCiudad = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  console.log('PUUUUUT');

  console.log(id);
  console.log(body);

  try {
    const ciudadUpdated = await Ciudad.findOne({
      where: {
        UBIGEO_CODIGO: id,
      },
    });

    if (!ciudadUpdated) {
      return res.status(404).json({
        msg: 'No existe la ciudad con el id ' + id,
      });
    }

    await ciudadUpdated.update({
      UBIGEO_CODIGO: body.UBIGEO_CODIGO,
      UBIGEO_NOMBRE: body.UBIGEO_NOMBRE,
      UBIGEO_NIVEL: body.UBIGEO_NIVEL,
      CAPITAL: body.CAPITAL,
    },{validate: true});

    res.json(ciudadUpdated);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const deleteCiudad = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const ciudad = await Ciudad.findOne({
      where: {
        UBIGEO_CODIGO: id,
      },
    });

    if (!ciudad) {
      return res.status(404).json({
        msg: 'No existe la ciudad con el id ' + id,
      });
    }

    await ciudad.destroy();
    res.json(ciudad);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};
