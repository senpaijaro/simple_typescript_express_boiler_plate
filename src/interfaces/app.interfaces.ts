import express from 'express';

export interface RouterParams {
    prefix: string;
    router: express.Router;
}