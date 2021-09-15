import { Router } from 'express';
import { getEmpresaPlacas, getEmpresaPlaca, postEmpresaPlaca, putEmpresaPlaca, deleteEmpresaPlaca } from '../controllers/empresaPlacas.controller';

const router = Router();

router.get('/', getEmpresaPlacas);
router.get('/:id', getEmpresaPlaca);
router.post('/', postEmpresaPlaca);
router.put('/:id', putEmpresaPlaca);
router.delete('/:id', deleteEmpresaPlaca);

export default router;
