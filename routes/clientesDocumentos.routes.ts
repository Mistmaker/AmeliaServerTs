import { Router } from 'express';
import { getDocumentos, getDocumento, postDocumento, deleteDocumento, getDocumentosPorCliente, getImagenesPorCliente, postImagen } from '../controllers/clientesDocumentos.controller';
import { putUsuario } from '../controllers/usuarios.controller';

const router = Router();

router.get('/', getDocumentos);
router.get('/:id/download', getDocumento);
router.get('/cliente/:id', getDocumentosPorCliente);
router.get('/cliente/img/:id', getImagenesPorCliente);
router.post('/', postDocumento);
router.post('/img', postImagen);
router.put('/:id', putUsuario);
router.delete('/:id', deleteDocumento);

export default router;