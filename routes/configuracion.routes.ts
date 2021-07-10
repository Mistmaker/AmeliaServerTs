import { Router } from 'express';
import {
  getClienteCuentaConfig,
  getProveedorCuentaConfig,
  postClienteCuentaConfig,
  postProveedorCuentaConfig,
} from '../controllers/configuracion.controller';

const router = Router();

router.get('/cliente-cuentas', getClienteCuentaConfig);
router.post('/cliente-cuentas', postClienteCuentaConfig);
router.get('/proveedor-cuentas', getProveedorCuentaConfig);
router.post('/proveedor-cuentas', postProveedorCuentaConfig);

export default router;
