import 'reflect-metadata';
import { createConnection } from 'typeorm';

import log from '../services/logger';

// CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
createConnection()
  .then(connection => {
    return connection;
  })
  .catch(error => log.error(error));
