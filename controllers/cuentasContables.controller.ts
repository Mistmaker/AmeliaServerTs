import { Request, Response } from 'express';
import { Op } from 'sequelize';
import CuentaContable from '../models/cuentasContables';

export const getCuentas = async (req: Request, res: Response) => {
  const cuentas = await CuentaContable.findAll({
    where: {
      [Op.not]: [
        {
          CON_CODIGO: {
            [Op.like]: '%' + '.',
          },
        },
      ],
    },
  });
  res.json(cuentas);
};

export const getCuenta = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cuenta = await CuentaContable.findByPk(id);

  res.json(cuenta);
}

export const getCuentasByNombreOrCode = async (req: Request, res: Response) => {
  const { body } = req;

  console.log(body);
  
  const cuentas = await CuentaContable.findAll({
    where: {
      [Op.not]: [
        {
          CON_CODIGO: {
            [Op.like]: '%' + '.',
          },
        },
      ],
      [Op.or]: [
        {
          CON_CODIGO: {
            [Op.like]: '%' + body.nameOrCode + '%',
          },
        },
        {
          CON_NOMBRE: {
            [Op.like]: '%' + body.nameOrCode + '%',
          },
        },
      ],
    },
    limit: 100,
  });
  res.json(cuentas);
};
