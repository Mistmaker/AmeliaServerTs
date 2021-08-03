import { Router } from 'express';
import { getDocumentos, getDocumento, postDocumento, deleteDocumento, getDocumentosPorCliente } from '../controllers/clientesDocumentos.controller';
import { putUsuario } from '../controllers/usuarios.controller';

const router = Router();

router.get('/', getDocumentos);
router.get('/:id/download', getDocumento);
router.get('/cliente/:id', getDocumentosPorCliente);
router.post('/', postDocumento);
router.put('/:id', putUsuario);
router.delete('/:id', deleteDocumento);

export default router;