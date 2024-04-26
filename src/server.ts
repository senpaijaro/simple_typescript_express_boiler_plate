import express from "express";
import helmet from "helmet";
import cors from "cors";

import router from "./routes"; // Import the missing module
import errorHandler from "./middlewares/errorHandler";

const app = express();

// sanitize request data
app.set('trust proxy', 1);
app.use(helmet());
app.use(express.json({ limit: "10mb"}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use('/api/v1', router) // Import the routes
app.use(errorHandler);

export default app;