import { Op } from 'sequelize';
import { Request, Response } from 'express';
import EmpresaPlaca from '../models/empresaPlacas';

export const getEmpresaPlacas = async (req: Request, res: Response) => {
  const placas = await EmpresaPlaca.findAll();
  res.json(placas);
};

export const getEmpresaPlaca = async (req: Request, res: Response) => {
  const { id } = req.params;

  const placa = await EmpresaPlaca.findOne({
    where: {
      COP_CODIGO: id,
    },
  });

  res.json(placa);
};

export const postEmpresaPlaca = async (req: Request, res: Response) => {
  const { body } = req;

  console.log(body);

  try {
    const placa = await EmpresaPlaca.findOne({
      where: {
        COP_CODIGO: body.COP_CODIGO,
      },
    });

    if (placa) {
      return res.status(403).json({
        msg: `Placa ${body.COP_CODIGO} ya está registrada`,
      });
    }

    const nuevaPlaca = await EmpresaPlaca.create(body);
    await nuevaPlaca.save();
    res.json(nuevaPlaca);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const putEmpresaPlaca = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const placa = await EmpresaPlaca.findOne({
      where: {
        COP_CODIGO: id,
      },
    });

    if (!placa) {
      return res.status(404).json({
        msg: 'No existe la placa con el id ' + id,
      });
    }

    await placa.update(body);
    res.json(placa);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const deleteEmpresaPlaca = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const placa = await EmpresaPlaca.findOne({
        where: {
          COP_CODIGO: id,
        },
      });;

    if (!placa) {
      return res.status(404).json({
        msg: 'No existe el placa con el id ' + id,
      });
    }

    await placa.destroy();
    res.json(placa);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};
