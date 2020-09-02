import { getRepository } from 'typeorm';
import log from '../../../services/logger';

export const CategorySeed = [
  {
    name: 'Alimentos'
  },
  {
    name: 'Bebidas'
  },
  {
    name: 'Frutas'
  },
  {
    name: 'Legumes'
  },
  {
    name: 'Limpeza'
  }
];

async function seed() {
  try {
    log.info('  Seeding Categories ...');

    await getRepository('category').delete({});
    await getRepository('category').save(CategorySeed);
  } catch (err) {
    throw new Error(err);
  }
}

export { seed as seedCategory };
