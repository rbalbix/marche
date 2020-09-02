import { createConnection } from 'typeorm';

import { seedCategory } from './Category/category.seed';

import log from '../../services/logger';

async function seed() {
  try {
    createConnection()
      .then(async connection => {
        log.info('Connecting ...');

        await seedCategory();

        log.info('Disconnecting ...');
        connection.close();
        log.info('Done.');
      })
      .catch(error => log.error(error));
  } catch (err) {
    log.error(err);
  }
}

seed();
