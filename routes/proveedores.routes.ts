import { Router } from 'express';
import {
  deleteProveedores,
  getProveedor,
  getProveedores,
  getProveedoresByName,
  postProveedores,
  putProveedores,
} from '../controllers/proveedores.controller';

const router = Router();

router.get('/', getProveedores);
router.get('/:id', getProveedor);
router.post('/nombre', getProveedoresByName);
router.post('/', postProveedores);
router.put('/:id', putProveedores);
router.delete('/:id', deleteProveedores);

export default router;
