import { Router } from 'express';
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario, autenticarUsuario } from '../controllers/usuarios.controller';

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.post('/auth', autenticarUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);



export default router;