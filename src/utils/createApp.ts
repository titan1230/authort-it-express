import { config } from 'dotenv';
import express, { Express } from 'express';

config();

import routes from "../routes/index"

export function createApp(): Express {

    const app = express()

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get('/', (req, res) => {
        res.status(200);
        res.send("Welcome to root URL of Server 😀");
    });


    app.use("/api", routes)
    return app;
}