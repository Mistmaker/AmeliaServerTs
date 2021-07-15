import { Router } from 'express';
import { getUnidadesProducto } from '../controllers/tipoUnidad.controller';

const router = Router();

router.get('/', getUnidadesProducto);

export default router;
