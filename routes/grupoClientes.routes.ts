import { Router } from 'express';
import { getGrupoClientes } from '../controllers/grupoClientes.controller';

const router = Router();

router.get('/', getGrupoClientes);
// router.get('/:id', getTipoPrecio);
// router.post('/', postTipoPrecio);
// router.put('/:id', putTipoPrecio);
// router.delete('/:id', deleteTipoPrecio);



export default router;