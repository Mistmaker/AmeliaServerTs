import { Router } from 'express';
import {
  deleteCiudad,
  getCantonesByProvincia,
  getCiudad,
  getCiudades,
  getCiudadesByNombre,
  getProvincias,
  postCiudad,
  putCiudad,
} from '../controllers/ciudades.controller';

const router = Router();

router.get('/', getCiudades);
router.get('/provincias', getProvincias);
router.get('/provincias/:id', getCantonesByProvincia);

router.post('/nombre', getCiudadesByNombre);
router.post('/', postCiudad);
router.get('/:id', getCiudad);
router.put('/:id', putCiudad);
router.delete('/:id', deleteCiudad);

export default router;
