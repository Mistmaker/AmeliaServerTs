import { Router } from 'express';
import {
  getGrupoProductos,
  getGrupoProducto,
  postGrupoProducto,
  putGrupoProducto,
  deleteGrupoProducto,
  getGrupoProductosByNombre,
} from '../controllers/grupoProductos.controller';

const router = Router();

router.get('/', getGrupoProductos);
router.get('/:id', getGrupoProducto);
router.post('/nombre', getGrupoProductosByNombre);
router.post('/', postGrupoProducto);
router.put('/:id', putGrupoProducto);
router.delete('/:id', deleteGrupoProducto);

export default router;
