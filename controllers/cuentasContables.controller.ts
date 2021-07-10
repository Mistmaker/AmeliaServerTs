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
