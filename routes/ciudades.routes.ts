import { Router } from 'express';
import {
  getCantonesByProvincia,
  getCiudades,
  getProvincias,
} from '../controllers/ciudades.controller';

const router = Router();

router.get('/', getCiudades);
router.get('/provincias', getProvincias);
router.get('/provincias/:id', getCantonesByProvincia);

export default router;
