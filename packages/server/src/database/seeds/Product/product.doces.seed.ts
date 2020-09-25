import { getRepository } from 'typeorm';
import log from '../../../services/logger';

import { ICategory, IProduct } from './product.seed';

async function seed(categories: ICategory[]) {
  try {
    const categoryName = 'Doces';
    log.info(`    Seeding ${categoryName} ...`);

    const category = categories.find(
      (category: ICategory) => category.name === categoryName
    );

    const products: IProduct[] = [
      { name: 'Kinder Ovo', unity: 'unidade' },
      { name: 'Sorvete', unity: 'unidade' },
      { name: 'Chocolate Branco', unity: 'unidade' },
      { name: 'Chocolate meio amargo', unity: 'unidade' }
    ];

    products.forEach(product => (product.category = category));

    await getRepository<IProduct>('product').save(products);
  } catch (err) {
    throw new Error(err);
  }
}

export { seed as seedDoces };
