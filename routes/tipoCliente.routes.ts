import { Router } from 'express';
import {
  getTiposClientes,
  getTipoCliente,
  postTipoCliente,
  putTipoCliente,
  deleteTipoCliente,
  getTipoClientesByNombre,
} from '../controllers/tipoCliente.controller';

const router = Router();

router.get('/', getTiposClientes);
router.get('/:id', getTipoCliente);
router.post('/nombre', getTipoClientesByNombre);
router.post('/', postTipoCliente);
router.put('/:id', putTipoCliente);
router.delete('/:id', deleteTipoCliente);

export default router;
