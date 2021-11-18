import dotenv from "dotenv";

dotenv.config();

const {
  // Environment
  NODE_ENV = "production",
  // Database
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  // Port
  PORT,
} = process.env;

const CONFIG = {
  production: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
  },
  development: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
  },
  test: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
  },
};

const config = CONFIG[NODE_ENV];
export { config };
