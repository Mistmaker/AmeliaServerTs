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
  const clientConfig = await Configuracion.findByPk('PRO_CUENTA');
  res.json(clientConfig);
};

export const postProveedorCuentaConfig = async (
  req: Request,
  res: Response,
) => {
  const { body } = req;

  try {
    const clientConfig = await Configuracion.findByPk('PRO_CUENTA');
    if (!clientConfig) {
      return res.status(404).json({
        msg: 'No existe la configuración para cuentas del proveedor ',
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

export const getPrecioIvaConfig = async (req: Request, res: Response) => {
  const clientConfig = await Configuracion.findByPk('PRECIO_IVA');
  res.json(clientConfig);
};

export const postPrecioIvaConfig = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const clientConfig = await Configuracion.findByPk('PRECIO_IVA');
    if (!clientConfig) {
      return res.status(404).json({
        msg: 'No existe la configuración para cuentas del precios de artículos ',
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
