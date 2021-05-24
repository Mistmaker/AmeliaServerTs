import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';
import clientesRoutes from '../routes/clientes.routes';
import productosRoutes from '../routes/productos.routes';
import grupoProductosRoutes from '../routes/grupoProductos.routes';
import tipoPreciosRoutes from '../routes/tipoPrecio.routes';
import preciosRoutes from '../routes/precios.routes';
import tipoClientesRoutes from '../routes/tipoCliente.routes';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        clientes: "/api/clientes",
        tipoClientes: "/api/tipoClientes",
        productos: "/api/productos",
        grupoProductos: "/api/grupoProductos",
        tipoPrecios: "/api/tipoPrecios",
        precios: "/api/precios",
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
        this.app.use(this.apiPaths.clientes, clientesRoutes);
        this.app.use(this.apiPaths.tipoClientes, tipoClientesRoutes);
        this.app.use(this.apiPaths.productos, productosRoutes);
        this.app.use(this.apiPaths.grupoProductos, grupoProductosRoutes);
        this.app.use(this.apiPaths.tipoPrecios, tipoPreciosRoutes);
        this.app.use(this.apiPaths.precios, preciosRoutes);
    }

    middlewares() {
        // Cors
        this.app.use(cors());

        // lectura y parseo del body
        this.app.use(express.json());

        // Carpeta publica

    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor inicado y corriendo en el puerto', this.port);
        });
    }
}

export default Server;