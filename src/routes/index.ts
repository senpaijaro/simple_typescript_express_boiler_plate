import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const routerPath = path.join(__dirname, "../routes");

fs.readdirSync(routerPath)
    .filter((file) => file !== 'index.ts' && file !== "shops") // Exclude index.js
    .map((file) => file.replace('.ts', '')) // Remove .js extension
    .forEach((routeSuffix) => {
        const routerFile = require(`./${routeSuffix}`).default;
        // const routerFile = require(`./${routeSuffix}`);
        const routeName = routeSuffix.replace('.route', '');
        router.use(`/${routeName}`, routerFile);
    });

export default router;