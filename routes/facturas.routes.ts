import { Router } from 'express';
import {
  deleteFactura,
  getFactura,
  getFacturas,
  postFacturaProveedor,
  putFactura,
} from '../controllers/facturas.controller';

const router = Router();

router.get('/', getFacturas);
router.get('/:id', getFactura);
router.post('/factura-proveedor', postFacturaProveedor);
router.put('/:id', putFactura);
router.delete('/:id', deleteFactura);

export default router;
