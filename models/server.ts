import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';
import tipoUnidadesRoutes from '../routes/tipoUnidad.routes';
import configuracionRoutes from '../routes/configuracion.routes';
import vendedoresRoutes from '../routes/vendedores.routes';
import cuentasRoutes from '../routes/cuentasContables.routes';
import clientesRoutes from '../routes/clientes.routes';
import proveedoresRoutes from '../routes/proveedores.routes';
import facturasRoutes from '../routes/facturas.routes';
import ciudadesRoutes from '../routes/ciudades.routes';
import productosRoutes from '../routes/productos.routes';
import grupoProductosRoutes from '../routes/grupoProductos.routes';
import tipoPreciosRoutes from '../routes/tipoPrecio.routes';
import preciosRoutes from '../routes/precios.routes';
import tipoClientesRoutes from '../routes/tipoCliente.routes';
import clienteDatosAdicionalesRoutes from '../routes/clienteDatosAdicionales.routes';
import usuariosRoutes from '../routes/usuario.routes';
import grupoClientesRoutes from '../routes/grupoClientes.routes';
import tipClientesRoutes from '../routes/tipoClientes.routes';
import cliDocsRoutes from '../routes/clientesDocumentos.routes';
import empresaRoutes from '../routes/empresa.routes';
import usuarioPerfilesRoutes from '../routes/usuarioPerfiles.routes';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        tipoUnidades: "/api/tipoUnidades",
        configuracion: "/api/configuracion",
        vendedores: "/api/vendedores",
        cuentas: "/api/cuentas",
        ciudades: "/api/ciudades",
        facturas: "/api/facturas",
        proveedores: "/api/proveedores",
        clientes: "/api/clientes",
        tipoClientes: "/api/tipoClientes",
        productos: "/api/productos",
        grupoProductos: "/api/grupoProductos",
        tipoPrecios: "/api/tipoPrecios",
        precios: "/api/precios",
        clienteDatosAdicionales: "/api/cliDatAdi",
        usuarios: "/api/usuarios",
        grupoClientes: "/api/grupoClientes",
        tipClientes: "/api/tipClientes",
        cliDocs: "/api/cliDocs",
        empresa: "/api/empresa",
        perfilesUsuario: "/api/usuarioPerfiles",
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();

    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Base de datos en línea');
        } catch (error) {
            throw new Error(error);
        }
    }

    routes() {
        this.app.use(this.apiPaths.tipoUnidades, tipoUnidadesRoutes);
        this.app.use(this.apiPaths.configuracion, configuracionRoutes);
        this.app.use(this.apiPaths.vendedores, vendedoresRoutes);
        this.app.use(this.apiPaths.cuentas, cuentasRoutes);
        this.app.use(this.apiPaths.ciudades, ciudadesRoutes);
        this.app.use(this.apiPaths.facturas, facturasRoutes);
        this.app.use(this.apiPaths.proveedores, proveedoresRoutes);
        this.app.use(this.apiPaths.clientes, clientesRoutes);
        this.app.use(this.apiPaths.tipoClientes, tipoClientesRoutes);
        this.app.use(this.apiPaths.productos, productosRoutes);
        this.app.use(this.apiPaths.grupoProductos, grupoProductosRoutes);
        this.app.use(this.apiPaths.tipoPrecios, tipoPreciosRoutes);
        this.app.use(this.apiPaths.precios, preciosRoutes);
        this.app.use(this.apiPaths.clienteDatosAdicionales, clienteDatosAdicionalesRoutes);
        this.app.use(this.apiPaths.usuarios, usuariosRoutes);
        this.app.use(this.apiPaths.grupoClientes, grupoClientesRoutes);
        this.app.use(this.apiPaths.tipClientes, tipClientesRoutes);
        this.app.use(this.apiPaths.cliDocs, cliDocsRoutes);
        this.app.use(this.apiPaths.empresa, empresaRoutes);
        this.app.use(this.apiPaths.perfilesUsuario, usuarioPerfilesRoutes);
    }

    middlewares() {

        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });

        // Cors
        this.app.use(cors());

        // lectura y parseo del body
        this.app.use(express.json());

        // Carpeta publica

    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor iniciado y corriendo en el puerto', this.port);
        });
    }
}

export default Server;