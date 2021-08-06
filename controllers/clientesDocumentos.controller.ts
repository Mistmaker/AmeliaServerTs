import { Op } from 'sequelize';
import { Request, Response } from 'express';
import ClientesDocumentos from '../models/clientesDocumentos';
import { Stream } from 'stream';
export const getDocumentos = async (req: Request, res: Response) => {
  const documentos = await ClientesDocumentos.findAll();
  res.json(documentos);
};
export const getDocumentosPorCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const documentos = await ClientesDocumentos.findAll({
    where: {
      CLI_CODIGO: id,
      DOC_TOTAL: {
        [Op.is]: null,
      }
    },
    attributes: ['DOC_CODIGO', 'CLI_CODIGO', 'DOC_NOMBRE', 'DOC_SIZE', 'DOC_TIPO', 'DOC_MIMETYPE', 'DOC_FECHA']
  });
  res.json(documentos);
};

export const getImagenesPorCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const documentos = await ClientesDocumentos.findAll({
    where: {
      CLI_CODIGO: id,
      DOC_TOTAL: {
        [Op.not]: null,
      }
    },
    attributes: ['DOC_CODIGO', 'CLI_CODIGO', 'DOC_NOMBRE', 'DOC_DATOS', 'DOC_SIZE', 'DOC_TIPO', 'DOC_MIMETYPE', 'DOC_FECHA', 'DOC_TOTAL', 'DOC_ESTADO']
  });

  if (documentos) {
    let tmpDoc: any = documentos;
    let docs = tmpDoc.map((doc: any) => {
      return {
        DOC_CODIGO: doc["DOC_CODIGO"],
        CLI_CODIGO: doc["CLI_CODIGO"],
        DOC_NOMBRE: doc["DOC_NOMBRE"],
        DOC_DATOS: doc["DOC_DATOS"].toString('base64'),
        DOC_SIZE: doc["DOC_SIZE"],
        DOC_TIPO: doc["DOC_TIPO"],
        DOC_MIMETYPE: doc["DOC_MIMETYPE"],
        DOC_FECHA: doc["DOC_FECHA"],
        DOC_TOTAL: doc["DOC_TOTAL"],
        DOC_ESTADO: doc["DOC_ESTADO"],
      }
    });
    res.json(docs);
  } else {
    res.json(documentos);
  }


};

export const getDocumento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const documento = await ClientesDocumentos.findByPk(id).then((file: any) => {
    var fileContents = Buffer.from(file.DOC_DATOS, "base64");
    var readStream = new Stream.PassThrough();
    readStream.end(fileContents);

    res.set('Content-disposition', `attachment; filename=${file.DOC_NOMBRE}.${file.DOC_TIPO}`);
    res.set('Content-Type', file.DOC_TIPO);

    readStream.pipe(res);
  }).catch(err => {
    console.log(err)
    res.json({ msg: 'Error', detail: err });
  });
};

export const postDocumento = async (req: any, res: Response) => {

  // console.log(req.body.idCli);

  console.log('in=>', req.files);
  console.log('len=>', req.files.current.length);

  if (req.files?.current == undefined || req.files?.current == null) {
    return res.status(400).send(`You must upload a file.`);
  }

  if (req.files.current.length) {

    for (const file of req.files.current) {
      console.log('for', file);
      const data = {
        DOC_CODIGO: 0,
        CLI_CODIGO: req.body.idCli,
        DOC_NOMBRE: file.name.replace(`.${file.name.split('.').pop()}`, ''),
        DOC_DATOS: file.data,
        DOC_SIZE: file.size / 1024,
        DOC_TIPO: file.name.split('.').pop(),
        DOC_MIMETYPE: file.mimetype,
        DOC_FECHA: req.body.fecha
      }
      // console.log('arr', data);
      //Valid Size
      if ((data.DOC_SIZE) / (1024) > 15) res.status(400).send('The file size must be less than 15 mb')
      try {
        const documento = await ClientesDocumentos.create(data);
        await documento.save();
        // res.json(documento);
      } catch (error) {
        res.status(500).json({
          msg: 'Ocurrió un error, contáctese con el administrador del sistema',
          error,
        });
      }
    }
    const resp = {
      err: false,
      msg: 'Archivos cargados con éxito'
    }
    res.status(200).json(resp);

  } else {
    const data = {
      DOC_CODIGO: 0,
      CLI_CODIGO: req.body.idCli,
      DOC_NOMBRE: req.files.current.name.replace(`.${req.files.current.name.split('.').pop()}`, ''),
      DOC_DATOS: req.files.current.data,
      DOC_SIZE: req.files.current.size / 1024,
      DOC_TIPO: req.files.current.name.split('.').pop(),
      DOC_MIMETYPE: req.files.current.mimetype,
      DOC_FECHA: req.body.fecha
    }
    //Valid Size
    if ((data.DOC_SIZE) / (1024) > 15) res.status(400).send('The file size must be less than 15 mb')

    try {
      const documento = await ClientesDocumentos.create(data);
      await documento.save();
      res.json(documento);
    } catch (error) {
      res.status(500).json({
        msg: 'Ocurrió un error, contáctese con el administrador del sistema',
        error,
      });
    }

  }
};

export const postImagen = async (req: any, res: Response) => {

  // console.log(req.body.idCli);

  console.log('in=>', req.files);
  console.log('len=>', req.files.current.length);

  if (req.files?.current == undefined || req.files?.current == null) {
    return res.status(400).send(`You must upload a file.`);
  }

  if (req.files.current.length) {

    for (const file of req.files.current) {
      console.log('for', file);
      const data = {
        DOC_CODIGO: 0,
        CLI_CODIGO: req.body.idCli,
        DOC_NOMBRE: file.name.replace(`.${file.name.split('.').pop()}`, ''),
        DOC_DATOS: file.data,
        DOC_SIZE: file.size / 1024,
        DOC_TIPO: file.name.split('.').pop(),
        DOC_MIMETYPE: file.mimetype,
        DOC_FECHA: req.body.fecha,
        DOC_TOTAL: req.body.total,
        DOC_ESTADO: req.body.estado
      }
      // console.log('arr', data);
      //Valid Size
      if ((data.DOC_SIZE) / (1024) > 15) res.status(400).send('The file size must be less than 15 mb')
      try {
        const documento = await ClientesDocumentos.create(data);
        await documento.save();
        // res.json(documento);
      } catch (error) {
        res.status(500).json({
          msg: 'Ocurrió un error, contáctese con el administrador del sistema',
          error,
        });
      }
    }
    const resp = {
      err: false,
      msg: 'Archivos cargados con éxito'
    }
    res.status(200).json(resp);

  } else {
    const data = {
      DOC_CODIGO: 0,
      CLI_CODIGO: req.body.idCli,
      DOC_NOMBRE: req.files.current.name.replace(`.${req.files.current.name.split('.').pop()}`, ''),
      DOC_DATOS: req.files.current.data,
      DOC_SIZE: req.files.current.size / 1024,
      DOC_TIPO: req.files.current.name.split('.').pop(),
      DOC_MIMETYPE: req.files.current.mimetype,
      DOC_FECHA: req.body.fecha,
      DOC_TOTAL: req.body.total,
      DOC_ESTADO: req.body.estado
    }
    //Valid Size
    if ((data.DOC_SIZE) / (1024) > 15) res.status(400).send('The file size must be less than 15 mb')

    try {
      const documento = await ClientesDocumentos.create(data);
      await documento.save();
      res.json(documento);
    } catch (error) {
      res.status(500).json({
        msg: 'Ocurrió un error, contáctese con el administrador del sistema',
        error,
      });
    }

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
