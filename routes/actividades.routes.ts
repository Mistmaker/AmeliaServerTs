import { Router } from 'express';
import { getActividades, getActividad, postActividad, putActividad, deleteActividad } from '../controllers/actividades.controller';

const router = Router();

router.get('/', getActividades);
router.get('/:id', getActividad);
router.post('/', postActividad);
router.put('/:id', putActividad);
router.delete('/:id', deleteActividad);

export default router;