import { getRepository } from 'typeorm';
import log from '../../../services/logger';

export const ProductSeed = [
  {
    name: ''
  }
];

async function seed() {
  try {
    log.info('  Seeding Products ...');

    await getRepository('product').delete({});
    // await getRepository('product').save(ProductSeed);
  } catch (err) {
    throw new Error(err);
  }
}

export { seed as seedProduct };
