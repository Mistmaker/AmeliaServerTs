import { Router } from 'express';
import {
  deleteUnidadProducto,
  getUnidadesProducto,
  getUnidadProducto,
  getUnidadProductosByNombre,
  postUnidadProducto,
  putUnidadProducto,
} from '../controllers/tipoUnidad.controller';

const router = Router();

router.get('/', getUnidadesProducto);
router.get('/:id', getUnidadProducto);
router.post('/nombre', getUnidadProductosByNombre);
router.post('/', postUnidadProducto);
router.put('/:id', putUnidadProducto);
router.delete('/:id', deleteUnidadProducto);

export default router;
