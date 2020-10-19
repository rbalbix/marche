import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

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

      const result = await getRepository(MarketList).save(marketList);

      return res.status(200).send(result);
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
