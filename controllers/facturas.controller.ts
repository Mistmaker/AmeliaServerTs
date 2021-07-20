import { Request, Response } from 'express';
import { Op } from 'sequelize';

import db from '../db/connection';
import EncabezadoFactura from '../models/encabezadoFactura';
import DetalleFactura from '../models/detalleFactura';
import Proveedor from '../models/proveedores';

export const getFacturas = async (req: Request, res: Response) => {};

export const getFactura = async (req: Request, res: Response) => {};

export const postFacturaProveedor = async (req: Request, res: Response) => {
  const { body } = req;
  console.log('body', body);

  if (!body.isNewSupplier) {
    // first we verify if the user exists
    const supplier = await Proveedor.findByPk(body.PRO_CODIGO);
    if (!supplier) {
      return res.status(404).json({
        msg: `No existe el proveedor con el id ${body.PRO_CODIGO}`,
      });
    }
  }

  // then we verify if invoice number exists
  const invoice = await EncabezadoFactura.findByPk(body.ENCFACPRO_NUMERO);
  console.log('factura', invoice);
  if (invoice) {
    return res.status(404).json({
      msg: `Ya existe una factura con el número ${body.ENCFACPRO_NUMERO}`,
    });
  }

  body.COM_CODIGO = '01';

  const t = await db.transaction();
  try {
    if (body.isNewSupplier) {
      const fixedSupplier = {
        COM_CODIGO: '01',
        PRO_RUCIDE: body.supplier.PRO_CODIGO,
        ...body.supplier,
      };
      console.log('supplier', fixedSupplier);
      await Proveedor.create(fixedSupplier, { transaction: t });
    }

    // format details values
    let details: any[] = body.itemsInvoice;
    details.map(
      (item,index) => (
        (item.ENCFACPRO_NUMERO = body.ENCFACPRO_NUMERO),
        (item.COM_CODIGO = '01'),
        (item.DETFACPRO_LINEA = index+1)
      ),
    );
    console.log('details', details);

    const invoice = await EncabezadoFactura.create(body, { transaction: t });

    await DetalleFactura.bulkCreate(details, {
      validate: true,
      transaction: t,
    });
    // commit the transaction
    await t.commit();
    res.status(200).json(invoice);
  } catch (error) {
    // rollback the transaction on error
    await t.rollback();

    console.log('error', error);

    res.status(500).json({
      msg: 'Ocurrió un error, contáctese con el administrador del sistema',
      error,
    });
  }
};

export const putFactura = async (req: Request, res: Response) => {};

export const deleteFactura = async (req: Request, res: Response) => {};
