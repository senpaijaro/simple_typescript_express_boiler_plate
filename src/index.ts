import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();


// import app from "./server";
import ExpressBootstrapper from "./bootstrapper";

const app = new ExpressBootstrapper(
    4000,
    [],
    []
);

app.start();