import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Vendedor from '../models/vendedores';

export const getVendedores = async (req: Request, res: Response) => {
  const vendedores = await Vendedor.findAll();
  res.json(vendedores);
};

export const getVendedor = async (req: Request, res: Response) => {
  const { id } = req.params;

  const vendedor = await Vendedor.findByPk(id);

  res.json(vendedor);
};

export const getVendedorByNombre = async (req: Request, res: Response) => {
  const { body } = req;

  const vendedores = await Vendedor.findAll({
    where: {
      [Op.or]: [
        {
          VEN_NOMBRE: {
            [Op.like]: '%' + body.name + '%',
          },
        },
      ],
    },
    limit: 100,
  });

  res.json(vendedores);
};

export const postVendedor = async (req: Request, res: Response) => {
  const { body } = req;

  console.log(body);

  try {
    const vendedor = await Vendedor.findByPk(body.VEN_CODIGO);

    body.COM_CODIGO = '01'

    if (vendedor) {
      return res.status(403).json({
        msg: `Código ${body.VEN_CODIGO} ya está asignado a otro vendedor`,
      });
    }

    const vent = await Vendedor.create(body);
    await vent.save();
    res.json(vent);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const putVendedor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const vendedor = await Vendedor.findByPk(id);

    if (!vendedor) {
      return res.status(404).json({
        msg: 'No existe el vendedor con el id ' + id,
      });
    }

    await vendedor.update(body);
    res.json(vendedor);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const deleteVendedor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const vendedor = await Vendedor.findByPk(id);

    if (!vendedor) {
      return res.status(404).json({
        msg: 'No existe el vendedor con el id ' + id,
      });
    }

    await vendedor.destroy();
    res.json(vendedor);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};
