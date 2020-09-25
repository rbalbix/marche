import { getRepository } from 'typeorm';
import log from '../../../services/logger';

import { ICategory, IProduct } from './product.seed';

async function seed(categories: ICategory[]) {
  try {
    const categoryName = 'Bebidas';
    log.info(`    Seeding ${categoryName} ...`);

    const category = categories.find(
      (category: ICategory) => category.name === categoryName
    );

    const products: IProduct[] = [
      { name: 'Suco de Uva', unity: 'unidade' },
      { name: 'Suco de Cajú', unity: 'unidade' },
      { name: 'Cerveja', unity: 'unidade' },
      { name: 'Vinho', unity: 'unidade' },
      { name: 'Coca-Cola', unity: 'unidade - 250ml' },
      { name: 'Água com gás', unity: '1 litro' },
      { name: 'Mate', unity: '1 litro' }
    ];

    products.forEach(product => (product.category = category));

    await getRepository<IProduct>('product').save(products);
  } catch (err) {
    throw new Error(err);
  }
}

export { seed as seedBebidas };
