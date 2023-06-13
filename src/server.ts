import express, { Application } from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./Docs/swagger"
import cors from "cors";
import { router } from "./Routes";
import * as https from 'https';
import * as fs from 'fs';

import db from "./Database/connection";

import "./Models/state.model";

class Server {

    private app: Application;
    private port: String;


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.app.use(bodyParser.json());
        this.app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

        this.dbConnection();
        this.app.use(cors());
        this.app.use(router);
        this.startServer();
    }

    private startServer() {
        const key = fs.readFileSync('./ssl/devdcm.com_private_key');
        const cert = fs.readFileSync('./ssl/mi_certificado.crt');    //  Set up routes (and middlewares if we had any)

        https.createServer({ key, cert }, this.app);
      }

     listen() {
         this.app.listen(this.port, () => {
             console.log(`Listo por el puerto ${this.port}`)
         });
     }

    async dbConnection() {
        try {
            db.sync().then(() => {
                console.log(`DB Actualizada`);
            });
        } catch (err) {
            throw err;
        }

    }



}

export default Server;