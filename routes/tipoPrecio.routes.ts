import { Router } from 'express';
import { getTiposPrecios, getTipoPrecio, postTipoPrecio, putTipoPrecio, deleteTipoPrecio } from '../controllers/tipoPrecio.controller';

const router = Router();

router.get('/', getTiposPrecios);
router.get('/:id', getTipoPrecio);
router.post('/', postTipoPrecio);
router.put('/:id', putTipoPrecio);
router.delete('/:id', deleteTipoPrecio);



export default router;