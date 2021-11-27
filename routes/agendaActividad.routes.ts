import { Router } from 'express';
import { getAgendaActividades, getAgendaActividad, postAgendaActividad, putAgendaActividad, deleteAgendaActividad, generarAgenda, getActividadesGeneradas, getEstadoActividades, getAgendaActividadCliente, deleteAgendaActividadCliente, postDocumento, getDocumentos, deleteDocumentos, getDocumento, downloadDocumento, generarAgendaClientes, getAgendaActividadesAdministador } from '../controllers/agendaActividades.controller';

const router = Router();

router.get('/', getAgendaActividades);
router.get('/administrador', getAgendaActividadesAdministador);
router.get('/actividades', getActividadesGeneradas);
router.get('/estadoActividades', getEstadoActividades);
router.get('/actividadesCliente/:id', getAgendaActividadCliente);
router.get('/:id', getAgendaActividad);
router.post('/', postAgendaActividad);
router.post('/periodo', generarAgenda);
router.post('/tareas', generarAgendaClientes);
router.put('/:id', putAgendaActividad);
router.delete('/:id', deleteAgendaActividad);
router.post('/actividadesCliente/:id', deleteAgendaActividadCliente);
router.get('/documento/:id', getDocumentos);
router.post('/documento', postDocumento);
router.delete('/documento/:id', deleteDocumentos);
router.get('/documento/id/:id', getDocumento);
router.get('/documento/:id/download', downloadDocumento);

export default router;