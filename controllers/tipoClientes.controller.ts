import { Op } from 'sequelize';
import { Request, Response } from 'express';
import TipoClientes from '../models/tipoClientes';

export const getTipoClientes = async (req: Request, res: Response) => {
  const tipos = await TipoClientes.findAll();
  res.json(tipos);
};

export const getTipoCliente = async (req: Request, res: Response) => {
  const { id } = req.params;

  const tipo = await TipoClientes.findOne({
    where: {
      ticli_codigo: id,
    },
  });

  res.json(tipo);
};

export const getTipoClientesByNombre = async (req: Request, res: Response) => {
  const { body } = req;

  const tiposClientes = await TipoClientes.findAll({
    where: {
      [Op.or]: [
        {
          ticli_nombre: {
            [Op.like]: '%' + body.name + '%',
          },
        },
      ],
    },
    limit: 100,
  });

  res.json(tiposClientes);
};

export const postTipoCliente = async (req: Request, res: Response) => {
  const { body } = req;

  console.log(body);

  try {
    const tipo = await TipoClientes.findOne({
      where: {
        ticli_codigo: body.ticli_codigo,
      },
    });

    if (tipo) {
      return res.status(403).json({
        msg: `Código ${body.ticli_codigo} ya está asignado a otro tipo de cliente`,
      });
    }

    const tipoCliente = await TipoClientes.create(body);
    await tipoCliente.save();
    res.json(tipoCliente);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const putTipoCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const tipo = await TipoClientes.findOne({
      where: {
        ticli_codigo: id,
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

export const deleteTipoCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tipo = await TipoClientes.findOne({
        where: {
          ticli_codigo: id,
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
