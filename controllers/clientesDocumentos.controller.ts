import { Op } from 'sequelize';
import { Request, Response } from 'express';
import ClientesDocumentos from '../models/clientesDocumentos';

export const getDocumentos = async (req: Request, res: Response) => {
  const documentos = await ClientesDocumentos.findAll();
  res.json(documentos);
};
export const getDocumentosPorCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const documentos = await ClientesDocumentos.findAll({
    where: {
      CLI_CODIGO: id
    }
  });
  res.json(documentos);
};

export const getDocumento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const documento = await ClientesDocumentos.findByPk(id);
  res.json(documento);
};

export const postDocumento = async (req: Request, res: Response) => {
  const { body } = req;

  console.log(body);

  try {
    const doc = await ClientesDocumentos.findByPk(body.DOC_CODIGO);

    if (doc) {
      return res.status(403).json({
        msg: `Código ${body.DOC_CODIGO} ya está asignado a otro tipo de cliente`,
      });
    }

    const documento = await ClientesDocumentos.create(body);
    await documento.save();
    res.json(documento);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const putDocumento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const documento = await ClientesDocumentos.findByPk(id);

    if (!documento) {
      return res.status(404).json({
        msg: 'No existe el documento con el id ' + id,
      });
    }

    await documento.update(body);
    res.json(documento);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const deleteDocumento = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const documento = await ClientesDocumentos.findByPk(id);

    if (!documento) {
      return res.status(404).json({
        msg: 'No existe el documento con el id ' + id,
      });
    }

    await documento.destroy();
    res.json(documento);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};
