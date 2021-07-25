import { Router } from 'express';
import { getGrupoClientes, getGrupoCliente, postGrupoCliente, putGrupoCliente, deleteGrupoCliente } from '../controllers/grupoClientes.controller';

const router = Router();

router.get('/', getGrupoClientes);
router.get('/:id', getGrupoCliente);
router.post('/', postGrupoCliente);
router.put('/:id', putGrupoCliente);
router.delete('/:id', deleteGrupoCliente);



export default router;