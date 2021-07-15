import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Proveedor from '../models/proveedores';

export const getProveedores = async (req: Request, res: Response) => {
  try {
    const suppliers = await Proveedor.findAll({ limit: 100 });

    res.json(suppliers);
  } catch (error) {
    res.json({
      error,
      msg: 'error',
    });
  }
};

export const getProveedor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const supplier = await Proveedor.findByPk(id);
  res.json(supplier);
};

export const getProveedoresByName = async (req: Request, res: Response) => {
  const { body } = req;

  const suppliers = await Proveedor.findAll({
    where: {
      [Op.or]: [
        {
          PRO_NOMBRE: {
            [Op.like]: '%' + body.name + '%',
          },
        },
        {
          PRO_NOMBREC: {
            [Op.like]: '%' + body.name + '%',
          },
        },
      ],
    },
    limit: 100,
  });

  res.json(suppliers);
};

export const postProveedores = async (req: Request, res: Response) => {
  const { body } = req;
  console.log('POST BODY PROVEEDOR', body);

  const fixedBody = { COM_CODIGO: '01', PRO_RUCIDE: body.PRO_CODIGO, ...body };

  try {
    const existsSupplier = await Proveedor.findByPk(body.PRO_CODIGO);
    if (existsSupplier) {
      return res.status(403).json({
        msg: `Número de identificación ${body.PRO_CODIGO} ya en uso`,
      });
    }

    const supplier = await Proveedor.create(fixedBody);
    await supplier.save();
    res.json(supplier);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Ocurrió un error inesperado, comuníquese con el administrador del sitio',
      error,
    });
  }
};

export const putProveedores = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  console.log('PUT BODY PROVEEDOR', body);

  const fixedBody = {
    COM_CODIGO: '01',
    PRO_RUCIDE: body.PRO_CODIGO,
    ...body,
  };

  try {
    const supplier = await Proveedor.findByPk(id);

    if (!supplier) {
      return res.status(404).json({
        msg: `No existe el proveedor con el id ${id}`,
      });
    }
    await supplier.update(fixedBody);
    res.json(supplier);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error inesperado, comuníquese con el administrador del sitio',
      error,
    });
  }
};

export const deleteProveedores = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const supplier = await Proveedor.findByPk(id);

    if (!supplier) {
      return res.status(404).json({
        msg: `No existe el proveedor con el id ${id}`,
      });
    }

    // body.CLI_NOMBREC = body.CLI_NOMBRE;

    await supplier.destroy();
    res.json(supplier);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrio un error inesperado, comuniquese con el administrador del sitio',
      error,
    });
  }
};
