import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Configuracion from '../models/configuracion';

export const getClienteCuentaConfig = async (req: Request, res: Response) => {
  const clientConfig = await Configuracion.findByPk('CLI_CUENTA');

  res.json(clientConfig);
};

export const postClienteCuentaConfig = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const clientConfig = await Configuracion.findByPk('CLI_CUENTA');
    if (!clientConfig) {
      return res.status(404).json({
        msg: 'No existe la configuración para cuentas del cliente ',
      });
    }
    await clientConfig.update(body);
    res.json(clientConfig);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const getProveedorCuentaConfig = async (req: Request, res: Response) => {
  const clientConfig = await Configuracion.findOne();

  res.json(clientConfig);
};

export const postProveedorCuentaConfig = async (
  req: Request,
  res: Response,
) => {
  const clientConfig = await Configuracion.findOne();

  res.json(clientConfig);
};
