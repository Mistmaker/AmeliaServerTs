import { Router } from 'express';
import { getAgendaActividades, getAgendaActividad, postAgendaActividad, putAgendaActividad, deleteAgendaActividad, generarAgenda, getActividadesGeneradas, getEstadoActividades, getAgendaActividadCliente, deleteAgendaActividadCliente } from '../controllers/agendaActividades.controller';

const router = Router();

router.get('/', getAgendaActividades);
router.get('/actividades', getActividadesGeneradas);
router.get('/estadoActividades', getEstadoActividades);
router.get('/actividadesCliente/:id', getAgendaActividadCliente);
router.get('/:id', getAgendaActividad);
router.post('/', postAgendaActividad);
router.post('/periodo', generarAgenda);
router.put('/:id', putAgendaActividad);
router.delete('/:id', deleteAgendaActividad);
router.post('/actividadesCliente/:id', deleteAgendaActividadCliente);

export default router;