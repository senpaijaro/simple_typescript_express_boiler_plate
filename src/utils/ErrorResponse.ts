
class ErrorResponse extends Error {
    statusCode: number; // Add statusCode property
    errorData: any;

    constructor(statusCode: number, message: string, data?: any) {
        super(message);
        this.statusCode = statusCode;
        this.errorData = data;
    }
}

export default ErrorResponse;