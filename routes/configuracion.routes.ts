import { Router } from 'express';
import {
  getClienteCuentaConfig,
  getProveedorCuentaConfig,
  postClienteCuentaConfig,
  postProveedorCuentaConfig,
  getPrecioIvaConfig,
  postPrecioIvaConfig,
  getAllConfigs,
  postAllConfigs
} from '../controllers/configuracion.controller';

const router = Router();

router.get('/', getAllConfigs);
router.post('/', postAllConfigs);
router.get('/cliente-cuentas', getClienteCuentaConfig);
router.post('/cliente-cuentas', postClienteCuentaConfig);
router.get('/proveedor-cuentas', getProveedorCuentaConfig);
router.post('/proveedor-cuentas', postProveedorCuentaConfig);
router.get('/precios-iva', getPrecioIvaConfig);
router.post('/precios-iva', postPrecioIvaConfig);

export default router;
