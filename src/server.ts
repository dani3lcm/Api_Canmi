import express, { Application } from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./Docs/swagger"
import cors from "cors";
import { router } from "./Routes";
require('dotenv').config()
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
    }

    startServer() {
        https.createServer({  
            cert: fs.readFileSync('./ssl/bundle.cer'),
            key: fs.readFileSync('./ssl/devdcm.com.key')
            }, this.app).listen(this.port, () => {
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