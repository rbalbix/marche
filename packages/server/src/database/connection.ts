import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';

import log from '../services/logger';

const conn = process.env.NODE_ENV || 'dev';

// CREATE EXTENSION IF NOT EXISTS "uuid-ossp" for postgres
getConnectionOptions(conn)
  .then(connectionOptions => {
    createConnection({ ...connectionOptions, name: 'default' })
      .then(connection => {
        return connection;
      })
      .catch(error => log.error(error));
  })
  .catch(error => log.error(error));
