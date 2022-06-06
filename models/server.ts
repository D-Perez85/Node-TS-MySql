import express, {Application} from 'express';
import userRoutes from '../routes/user';

class Server{

    private app: Application;
    private port: string; 
    private apiPath = {
        users: '/api/users'
    }

    constructor(){
        this.app  = express();
        this.port = process.env.PORT || '8000';
        this.routes(); 
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

