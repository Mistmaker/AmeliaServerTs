import { Request, Response } from 'express';
import { Op } from 'sequelize';

import Producto from '../models/productos';
import Precio from '../models/precios';
import db from '../db/connection';
import InventarioKardex from '../models/inventarioKardex';

export const getProductos = async (req: Request, res: Response) => {
  const productos = await Producto.findAll({
    // limit: 2
  });
  res.json(productos);
};

export const getProducto = async (req: Request, res: Response) => {
  const { id } = req.params;

  const producto = await Producto.findByPk(id);

  res.json(producto);
};

export const getProductosByName = async (req: Request, res: Response) => {
  const { body } = req;

  const products = await Producto.findAll({
    where: {
      [Op.or]: [
        {
          ART_NOMBRE: {
            [Op.like]: '%' + body.name + '%',
          },
        },
      ],
    },
    limit: 5,
  });

  res.json(products);
};

export const postProducto = async (req: Request, res: Response) => {
  const { body } = req;
  // instanced the transaction
  const t = await db.transaction();
  try {
    const pro = await Producto.findByPk(body.ART_CODIGO);

    if (pro) {
      return res.status(403).json({
        msg: `Código ${body.ART_CODIGO} ya está asignado a otro producto`,
      });
    }

    body.COM_CODIGO = '01';
    body.ART_NOMBREC = body.ART_NOMBRE;
    body.ART_FLAG = 1;

    let precios: any[] = body.precios;
    precios.map(
      (value) => (
        (value.ART_CODIGO = body.ART_CODIGO), (value.COM_CODIGO = '01')
      ),
    );

    const producto = await Producto.create(body, { transaction: t });
    await Precio.bulkCreate(precios, { validate: true, transaction: t });
    await InventarioKardex.create(
      { art_codigo: body.ART_CODIGO, kdx_cantidad: 0, kdx_costofecha: 0 },
      { transaction: t },
    );
    // commit the transaction
    await t.commit();
    res.json(producto);
  } catch (error) {
    // rollback the transaction on error
    await t.rollback();

    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const putProducto = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  // instanced the transaction
  const t = await db.transaction();

  try {
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({
        msg: 'No existe el producto con el id ' + id,
      });
    }
    // put default values in prices
    let precios: any[] = body.precios;
    precios.map(
      (value) => (
        (value.ART_CODIGO = body.ART_CODIGO), (value.COM_CODIGO = '01')
      ),
    );

    await producto.update(body, { transaction: t });

    await Precio.destroy({
      where: { ART_CODIGO: body.ART_CODIGO },
      transaction: t,
    });

    await Precio.bulkCreate(precios, {
      transaction: t,
    });
    // commit the transaction
    await t.commit();
    res.json(producto);
  } catch (error) {
    // rollback
    await t.rollback();
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const deleteProducto = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({
        msg: 'No existe el producto con el id ' + id,
      });
    }

    await producto.destroy();
    res.json(producto);
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};
