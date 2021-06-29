import { Router } from 'express';
import {
  deleteFactura,
  getFactura,
  getFacturas,
  postFactura,
  putFactura,
} from '../controllers/facturas.controller';

const router = Router();

router.get('/', getFacturas);
router.get('/:id', getFactura);
router.post('/', postFactura);
router.put('/:id', putFactura);
router.delete('/:id', deleteFactura);

export default router;
