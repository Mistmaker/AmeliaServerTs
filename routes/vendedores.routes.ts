import { Router } from 'express';
import {
  deleteVendedor,
  getVendedor,
  getVendedorByNombre,
  getVendedores,
  postVendedor,
  putVendedor,
} from '../controllers/vendedores.controller';

const router = Router();

router.get('/', getVendedores);
router.get('/:id', getVendedor);
router.post('/nombre', getVendedorByNombre);
router.post('/', postVendedor);
router.put('/:id', putVendedor);
router.delete('/:id', deleteVendedor);

export default router;
