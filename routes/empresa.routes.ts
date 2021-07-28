import { Router } from 'express';
import { getDatosEmpresa, putDatosEmpresa } from '../controllers/empresa.controller';

const router = Router();

router.get('/', getDatosEmpresa);
router.put('/:id', putDatosEmpresa);

export default router;