import { Router } from 'express';
import { getClientes, getCliente, postCliente, putCliente, deleteCliente, getClientesPorNombre, getClientePorRuc } from '../controllers/clientes.controller';

const router = Router();

router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/nombre', getClientesPorNombre);
router.get('/ruc/:id', getClientePorRuc);
router.post('/', postCliente);
router.put('/:id', putCliente);
router.delete('/:id', deleteCliente);



export default router;