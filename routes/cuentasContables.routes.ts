import { Router } from 'express';
import {
  getCuentas,
  getCuentasByNombreOrCode,
  getCuenta,
} from '../controllers/cuentasContables.controller';

const router = Router();

router.get('/', getCuentas);
router.get('/:id', getCuenta);
router.post('/nombre-codigo', getCuentasByNombreOrCode);

export default router;
