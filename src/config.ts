import dotenv from 'dotenv';
import path from 'path';
import Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../.env')});

// Schema definition for environment variables
const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string().valid('production', 'development', 'qa', 'local').required(),
    PORT: Joi.number().default(3000),
    BASE_URL: Joi.string().required().description('Base url API'),
    DATABASE_USERS_CONNECTION_STRING: Joi.string().required().description('Database connection string for users'),
}).unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export default {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    baseUrl: envVars.BASE_URL,
    database: {
        users: {
            url: envVars.DATABASE_USERS_CONNECTION_STRING,
            options: { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
        }
    }
}