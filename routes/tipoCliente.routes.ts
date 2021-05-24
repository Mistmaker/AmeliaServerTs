import { Router } from 'express';
import { getTiposClientes, getTipoCliente, postTipoCliente, putTipoCliente, deleteTipoCliente } from '../controllers/tipoCliente.controller';

const router = Router();

router.get('/', getTiposClientes);
router.get('/:id', getTipoCliente);
router.post('/', postTipoCliente);
router.put('/:id', putTipoCliente);
router.delete('/:id', deleteTipoCliente);



export default router;