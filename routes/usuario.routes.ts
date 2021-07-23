import { Router } from 'express';
import { getUsuarios } from '../controllers/usuarios.controller';

const router = Router();

router.get('/', getUsuarios);
// router.get('/:id', getTipoPrecio);
// router.post('/', postTipoPrecio);
// router.put('/:id', putTipoPrecio);
// router.delete('/:id', deleteTipoPrecio);



export default router;