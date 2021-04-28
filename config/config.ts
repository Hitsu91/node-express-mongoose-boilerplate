import dotenv from 'dotenv';
dotenv.config();

const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 30000,
  keepAlive: true,
};

const MONGO_USER = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOST = process.env.MONGO_HOST ?? 'localhost:27017/opencharge';

const MONGO = {
  host: MONGO_HOST,
  username: MONGO_USER,
  password: MONGO_PASSWORD,
  options: MONGO_OPTIONS,
  url: `mongodb://${
    MONGO_USER && MONGO_PASSWORD ? `${MONGO_USER}:${MONGO_PASSWORD}@` : ''
  }${MONGO_HOST}`,
};

const SERVER_HOSTNAME: string = process.env.SERVER_HOSTNAME ?? 'localhost';
const SERVER_PORT: number | string = process.env.SERVER_PORT ?? 8000;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  server: SERVER,
  mongo: MONGO,
};

export default config;
