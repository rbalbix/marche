import { Request, Response } from 'express';
import { createQueryBuilder, getRepository } from 'typeorm';
import { List } from '../entities';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import log from '../../services/logger';

interface IProduct {
  // product: {
  marketListId: string;
  name: string;
  unity: string;
  isMarked: boolean;
  // };
}

interface ICategory {
  // category: {
  // name: string;
  products: Array<IProduct>;
  // };
}
interface IMarketList {
  listId: string;
  name: string;
  productQuantity: number;
  categories: Array<ICategory>;
}
export class ListController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const lists = await getRepository(List).find({
        select: ['id', 'name', 'productQuantity', 'createdAt'],
        order: { createdAt: 'DESC' }
      });

      return res.status(200).send(lists);
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const products = await createQueryBuilder('list', 'l')
        .select([
          'l.id as listId',
          'l.name as listName',
          'l.productQuantity as productQuantity'
        ])
        .addSelect('ml.id', 'marketId')
        .addSelect('ml.quantity', 'quantity')
        .addSelect('ml.isMarked', 'isMarked')
        .addSelect('c.name', 'categoryName')
        .addSelect('p.name', 'productName')
        .addSelect('p.unity', 'unity')
        .innerJoin('market_list', 'ml', 'l.id = ml.listId')
        .innerJoin('product', 'p', 'ml.productId = p.id')
        .innerJoin('category', 'c', 'p.categoryId = c.id')
        .where('l.id = :id', { id })
        .orderBy('c.name, p.name')
        .getRawMany();

      let categoryName = '';
      const marketList: IMarketList = {
        listId: products[0].listId,
        name: products[0].listName,
        productQuantity: products[0].productQuantity,
        categories: []
      };

      const cat = [];
      products.map(product => {
        if (categoryName !== product.categoryName) {
          categoryName = product.categoryName;

          console.log(product.categoryName);
          console.log(cat[product.categoryName]);
          cat[product.categoryName].products = new Array<IProduct>();
        }
        cat[product.categoryName].products.push({
          marketListId: product.marketId,
          name: product.productName,
          unity: product.unity,
          isMarked: product.isMarked
        });
      });

      console.log(cat);

      marketList.categories = cat;

      return res.status(200).send({ cat });
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const name = format(new Date(), 'dd-MMM-yyyy', {
        locale: ptBR
      }).toUpperCase();

      const result = await getRepository(List).save({ name });

      return res.status(201).send(result);
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const result = await getRepository(List).delete(id);
      return res.status(200).send(result);
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
