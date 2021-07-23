import { Router } from 'express';
import { getClientes, getCliente, postCliente, putCliente, deleteCliente, getClientesPorNombre, getClientePorRuc, getClientesPorVence, getClientesPorGrupo } from '../controllers/clientes.controller';

const router = Router();

router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/nombre', getClientesPorNombre);
router.post('/vence', getClientesPorVence);
router.post('/grupo', getClientesPorGrupo);
router.get('/ruc/:id', getClientePorRuc);
router.post('/', postCliente);
router.put('/:id', putCliente);
router.delete('/:id', deleteCliente);



export default router;