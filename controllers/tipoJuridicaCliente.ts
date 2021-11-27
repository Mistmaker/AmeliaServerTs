import { Op } from 'sequelize';
import { Request, Response } from 'express';
import TipoJuridicaCliente from '../models/tipoJuridicaCliente';

export const getTiposJuridicaClientes = async (req: Request, res: Response) => {
  const tipos = await TipoJuridicaCliente.findAll();
  res.json(tipos);
};

export const getTipos = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tipos = await TipoJuridicaCliente.findAll(
    {
      where: {
        TPJ_TIPOCLIENTE: id,
      },
    }
  );
  res.json(tipos);
};

export const getTipoJuridicaCliente = async (req: Request, res: Response) => {
  const { id } = req.params;

  const tipo = await TipoJuridicaCliente.findOne({
    where: {
      TPJ_CODIGO: id,
    },
  });

  res.json(tipo);
};

export const postTipoJuridicaCliente = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const tipo = await TipoJuridicaCliente.findOne({
      where: {
        TPJ_CODIGO: body.TPJ_CODIGO,
      },
    });

    if (tipo) {
      return res.status(403).json({
        msg: `Código ${body.TPJ_CODIGO} ya está asignado a otro tipo de cliente`,
      });
    }

    const tipoJuridicaCliente = await TipoJuridicaCliente.create(body);
    await tipoJuridicaCliente.save();
    res.json(tipoJuridicaCliente);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const putTipoJuridicaCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const tipo = await TipoJuridicaCliente.findOne({
      where: {
        TPJ_CODIGO: id,
      },
    });

    if (!tipo) {
      return res.status(404).json({
        msg: 'No existe el grupo con el id ' + id,
      });
    }

    await tipo.update(body);
    res.json(tipo);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const deleteTipoJuridicaCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tipo = await TipoJuridicaCliente.findOne({
        where: {
          TPJ_CODIGO: id,
        },
      });;

    if (!tipo) {
      return res.status(404).json({
        msg: 'No existe el grupo con el id ' + id,
      });
    }

    await tipo.destroy();
    res.json(tipo);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};
