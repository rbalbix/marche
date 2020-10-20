import { Request, Response } from 'express';
import { getConnection } from 'typeorm';

import { MarketList } from '../entities/MarketList';
import log from '../../services/logger';

interface Product {
  id: string;
  quantity: number;
}

export class MarketListController {
  async store(req: Request, res: Response): Promise<Response> {
    try {
      const { id, products } = req.body;

      const marketList = [];
      products.map((product: Product) => {
        marketList.push({
          listId: id,
          productId: product.id,
          quantity: product.quantity
        });
      });

      let result: MarketList[];
      await getConnection().transaction(async transactionalEntityManager => {
        // Save MarketList
        result = await transactionalEntityManager.save<MarketList>(
          'market_list',
          marketList
        );

        // Update list
        const productQuantity = await transactionalEntityManager.count(
          'market_list',
          { listId: id }
        );

        await transactionalEntityManager.save('list', {
          id,
          productQuantity: productQuantity
        });
      });

      return res.status(201).send(result);
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
