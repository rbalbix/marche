import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';

import log from '../services/logger';

// CREATE EXTENSION IF NOT EXISTS "uuid-ossp" for postgres
getConnectionOptions(process.env.NODE_ENV || 'dev')
  .then(connectionOptions => {
    createConnection({ ...connectionOptions, name: 'default' })
      .then(connection => {
        return connection;
      })
      .catch(error => log.error(error));
  })
  .catch(error => log.error(error));
