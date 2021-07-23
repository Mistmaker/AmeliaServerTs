import { Router } from 'express';
import { getDatos, getDato, postDatos, getDatosPorRuc, putDato, deleteDato } from '../controllers/clientesDatosAdicionales.controller';

const router = Router();

router.get('/', getDatos);
router.get('/:id', getDato);
router.post('/ruc', getDatosPorRuc);
router.post('/', postDatos);
router.put('/:id', putDato);
router.delete('/:id', deleteDato);



export default router;