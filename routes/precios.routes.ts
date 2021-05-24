import { Router } from 'express';
import { getPrecios, getPrecio, postPrecio, putPrecio, deletePrecio, getPreciosPorIdProducto } from '../controllers/precios.controller';

const router = Router();

router.get('/', getPrecios);
router.get('/IdProd/:id', getPreciosPorIdProducto);
router.get('/:id', getPrecio);
router.post('/', postPrecio);
router.put('/:id', putPrecio);
router.delete('/:id', deletePrecio);



export default router;