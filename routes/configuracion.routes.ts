import { Router } from 'express';
import {
  getClienteCuentaConfig,
  getConfig,
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
router.get('/cliente-cuentas', getClienteCuentaConfig);
router.get('/:id', getConfig);
router.post('/', postAllConfigs);
router.post('/cliente-cuentas', postClienteCuentaConfig);
router.get('/proveedor-cuentas', getProveedorCuentaConfig);
router.post('/proveedor-cuentas', postProveedorCuentaConfig);
router.get('/precios-iva', getPrecioIvaConfig);
router.post('/precios-iva', postPrecioIvaConfig);

export default router;
