import { Router } from 'express';
import { getComentariosAgenda, getComentarioAgenda, postComentarioAgenda, putComentarioAgenda, deleteComentarioAgenda, getComentariosAgendaPorActividad } from '../controllers/comentariosAgenda.controller';

const router = Router();

router.get('/', getComentariosAgenda);
router.get('/:id', getComentarioAgenda);
router.get('/acti/:id', getComentariosAgendaPorActividad);
router.post('/', postComentarioAgenda);
router.put('/:id', putComentarioAgenda);
router.delete('/:id', deleteComentarioAgenda);

export default router;