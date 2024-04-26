import { Request, Response, NextFunction } from 'express';

// Define the middleware function
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    // Add your authentication logic here
    // Call next() if the user is authenticated, otherwise send a 401 response
    console.log("protect authentication")
    next();
}