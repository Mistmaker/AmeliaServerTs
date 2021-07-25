import { Router } from 'express';
import { getTipoClientes } from '../controllers/tipoClientes.controller';

const router = Router();

router.get('/', getTipoClientes);
// router.get('/:id', getTipoCliente);
// router.post('/nombre', getTipoClientesByNombre);
// router.post('/', postTipoCliente);
// router.put('/:id', putTipoCliente);
// router.delete('/:id', deleteTipoCliente);

export default router;
