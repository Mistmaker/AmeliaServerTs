import { Router } from 'express';
import { getPerfiles, getPerfil, postPerfil, putPerfil, deletePerfil } from '../controllers/usuarioPerfiles.controller';

const router = Router();

router.get('/', getPerfiles);
router.get('/:id', getPerfil);
router.post('/', postPerfil);
router.put('/:id', putPerfil);
router.delete('/:id', deletePerfil);

export default router;
