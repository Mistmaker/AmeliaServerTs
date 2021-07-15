import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Vendedor from '../models/vendedores';

export const getVendedores = async (req: Request, res: Response) => {
  const vendedores = await Vendedor.findAll();

  res.json(vendedores);
};
