import { Op } from 'sequelize';
import { Request, Response } from 'express';
import Empresa from '../models/empresa';
import EmpresaPlaca from '../models/empresaPlacas';

export const getDatosEmpresa = async (req: Request, res: Response) => {
  const { id } = req.params;

  const tipo = await Empresa.findOne({
    where: {
        COMCODIGO: '01',
    },
  });

  res.json(tipo);
};


export const putDatosEmpresa = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const tipo = await Empresa.findOne({
      where: {
        COMCODIGO: id,
      },
    });

    if (!tipo) {
      return res.status(404).json({
        msg: 'No existe la empresa con el id ' + id,
      });
    }

    await tipo.update(body);

    if (body.PLACAS){
      await EmpresaPlaca.truncate();
      await EmpresaPlaca.bulkCreate(body.PLACAS);
    }

    res.json(tipo);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};
