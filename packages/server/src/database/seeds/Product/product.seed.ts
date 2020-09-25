import { getRepository } from 'typeorm';
import log from '../../../services/logger';

import { seedAlimentos, seedBebidas, seedDoces } from './';

export interface ICategory {
  id: string;
  name: string;
}
export interface IProduct {
  name: string;
  unity: string;
  category?: ICategory;
}

async function seed() {
  try {
    log.info('  Seeding Products ...');

    await getRepository('product').delete({});

    const categories = await getRepository<ICategory>('category').find();

    await seedAlimentos(categories);
    await seedBebidas(categories);
    await seedDoces(categories);
  } catch (err) {
    throw new Error(err);
  }
}

export { seed as seedProduct };
