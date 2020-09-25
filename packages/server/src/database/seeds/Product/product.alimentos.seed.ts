import { getRepository } from 'typeorm';
import log from '../../../services/logger';

import { ICategory, IProduct } from './product.seed';

async function seed(categories: ICategory[]) {
  try {
    const categoryName = 'Alimentos';
    log.info(`    Seeding ${categoryName} ...`);

    const category = categories.find(
      (category: ICategory) => category.name === categoryName
    );

    const products: IProduct[] = [
      { name: 'Arroz', unity: '1 kg' },
      { name: 'Feijão', unity: '1 kg' },
      { name: 'Macarrão - Spaghetti', unity: 'unidade' }
    ];

    products.forEach(product => (product.category = category));

    await getRepository<IProduct>('product').save(products);
  } catch (err) {
    throw new Error(err);
  }
}

export { seed as seedAlimentos };
