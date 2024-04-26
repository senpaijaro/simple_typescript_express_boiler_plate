import { Request, Response, NextFunction } from 'express';
import ErrorResponse from '../utils/ErrorResponse';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let newError

    let errorData = { 
        statusCode: err?.statusCode,
        message: err?.message
     }; 
    
    switch (err.name) {
        case "CastError":
            //  When a document does not exists in DB
            errorData.message = `Record not found`;
            break;
        case "ValidationError":
            // When a required field in req.body is missing
            // console.log(error.errors);
            errorData.message = Object.values(err.errors).map((val: any) => val.message);
            break;
    }
    
    res.status(errorData.statusCode || 500).json({
        c: errorData.statusCode || 500,
        m: newError || errorData.message || err.message || "Server Error",
        d: {},
    });
}

export default errorHandler;