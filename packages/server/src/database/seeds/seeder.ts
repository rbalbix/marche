import { createConnection, getConnectionOptions } from 'typeorm';

import { seedCategory } from './Category';
import { seedProduct } from './Product';

import log from '../../services/logger';

const conn = process.env.NODE_ENV || 'dev';

async function seed() {
  try {
    getConnectionOptions(conn)
      .then(connectionOptions => {
        createConnection({ ...connectionOptions, name: 'default' })
          .then(async connection => {
            log.info('Connecting ...');

            await seedCategory();
            await seedProduct();

            log.info('Disconnecting ...');
            connection.close();
            log.info('Done.');
          })
          .catch(error => log.error(error));
      })
      .catch(error => log.error(error));
  } catch (err) {
    log.error(err);
  }
}

seed();
