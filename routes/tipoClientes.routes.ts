import { Router } from 'express';
import { getTipoClientes, getTipoCliente, postTipoCliente, putTipoCliente, deleteTipoCliente } from '../controllers/tipoClientes.controller';

const router = Router();

router.get('/', getTipoClientes);
router.get('/:id', getTipoCliente);
router.post('/', postTipoCliente);
router.put('/:id', putTipoCliente);
router.delete('/:id', deleteTipoCliente);

export default router;
