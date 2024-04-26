
import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config';

const MainDatabase = mongoose.createConnection(config.database.users.url);

export { MainDatabase };
