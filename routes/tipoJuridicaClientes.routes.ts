import { Router } from 'express';
import { getTipos } from '../controllers/tipoJuridicaCliente';

const router = Router();

// router.get('/', getTipoClientes);
router.get('/:id', getTipos);
// router.post('/', postTipoCliente);
// router.put('/:id', putTipoCliente);
// router.delete('/:id', deleteTipoCliente);

export default router;
