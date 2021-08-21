import { Router } from 'express';
import { getDocumentos, getDocumento, postDocumento, deleteDocumento, getDocumentosPorCliente, getImagenesPorCliente, postImagen, getImagen, putDocumento } from '../controllers/clientesDocumentos.controller';

const router = Router();

router.get('/', getDocumentos);
router.get('/:id/download', getDocumento);
router.get('/cliente/:id', getDocumentosPorCliente);
router.get('/cliente/img/:id', getImagenesPorCliente);
router.get('/cliente/view/img/:id', getImagen);
router.post('/', postDocumento);
router.post('/img', postImagen);
router.put('/:id', putDocumento);
router.delete('/:id', deleteDocumento);

export default router;