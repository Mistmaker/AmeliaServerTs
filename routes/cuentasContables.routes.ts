import { Router } from 'express';
import {  getCuentas} from '../controllers/cuentasContables.controller';

const router = Router();

router.get('/', getCuentas);
export default router;