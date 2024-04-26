import express from "express";
import config from "./config";
import helmet from "helmet";
import cors from "cors";

import { LogDecorator } from "./decorators/log.decorator";
import { RouterParams } from "./interfaces/app.interfaces";
import router from "./routes";
import { Authentication, TestLogDecorator } from "./decorators/test.decorator";
import errorHandler from "./middlewares/errorHandler";

export default class ExpressBootstrapper {

    private app: express.Application;

    constructor(
        private port: number, 
        private middlewares: any[], 
        private controllers: any[],
    ) {
        this.app = express();
        // sanitize request data
        this.app.set('trust proxy', 1);
        this.app.use(helmet());
        this.app.use(express.json({ limit: "10mb"}));
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use(cors());

        if (router) {
            this.app.use('/api/v1', router);
            this.app.use(errorHandler);
        }
    }

    public async router({ prefix = '', router}: RouterParams) {
        if (!router) throw new Error('Please provide a router');
        this.app.use(prefix, router);
    }

    public start() {
        this.app.listen(this.port, () => console.log(`[server]: Server is running at http://localhost:${config.port}`));
        return this.app;
    }
}