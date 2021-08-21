import { Router } from 'express';
import { getEntidad, getEntidades, postEntidad, putEntidad, deleteEntidad } from '../controllers/entidad.controller';

const router = Router();

router.get('/', getEntidades);
router.get('/:id', getEntidad);
router.post('/', postEntidad);
router.put('/:id', putEntidad);
router.delete('/:id', deleteEntidad);

export default router;