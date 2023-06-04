import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./Routes";

import db from "./Database/connection";

import "./Models/state.model";

class Server {

    private app: Application;
    private port: String;


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.app.use(bodyParser.json());
        this.dbConnection();
        this.app.use(cors());
        this.app.use(router);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listo por el puerto ${this.port}`)
        });
    }

    async dbConnection(){
        try {            
            db.sync({alter: true}).then(() => {
                console.log(`DB Actualizada`);
            });  
        } catch (err) {
            throw err;
        }

    }


    
}

export default Server;