import express, {Application} from 'express';
import userRoutes from '../routes/user';
import Cors from 'cors';
import db from '../db/connection';
 


class Server{

    private app: Application;
    private port: string; 
    private apiPath = {
        users: '/api/users'
    }

    constructor(){
        this.app  = express();
        this.port = process.env.PORT || '8000';

        //Metodos iniciales
        this.dbConnection(); 
        this.middlewares();
        this.routes(); 
    }

async dbConnection(){
    try {
        await db.authenticate(); 
        console.log('Database Online');
        
    } catch (error: any) {
        throw new Error(error); 
    }
}

    middlewares() {

        // CORS
        this.app.use( Cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public') );
    }

routes(){
    this.app.use(this.apiPath.users, userRoutes); 
}

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puertico ' + this.port );
        })
    }

}
export default Server;

function cors(): any {
    throw new Error('Function not implemented.');
}

