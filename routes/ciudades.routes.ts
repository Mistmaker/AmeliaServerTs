import { Router } from 'express';
import {
  getCiudades,
  getCiudadesByName,
} from '../controllers/ciudades.controller';

const router = Router();

router.get('/', getCiudades);
router.post('/nombre', getCiudadesByName);

export default router;
