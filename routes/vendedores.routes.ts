import { Router } from 'express';
import { getVendedores} from '../controllers/vendedores.controller';

const router = Router();

router.get('/', getVendedores);


export default router;