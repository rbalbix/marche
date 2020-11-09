import { Request, Response } from 'express';
import { createQueryBuilder, getRepository } from 'typeorm';
import { List } from '../entities';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import log from '../../services/logger';

interface IListResult {
  marketId: string;
  quantity: number;
  isMarked: number;
  productName: string;
  unity: string;
  categoryName: string;
  listId: string;
  listName: string;
  productQuantity: number;
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
      // let categoryName = '';

      const marketList = await createQueryBuilder<IListResult>('list', 'l')
        .select([
          'l.id as listId',
          'l.name as listName',
          'l.productQuantity as productQuantity'
        ])
        .addSelect('ml.id', 'marketId')
        .addSelect('ml.quantity', 'quantity')
        .addSelect('ml.isMarked', 'isMarked')
        .addSelect('c.id', 'categoryId')
        .addSelect('c.name', 'categoryName')
        .addSelect('p.name', 'productName')
        .addSelect('p.unity', 'unity')
        .innerJoin('market_list', 'ml', 'l.id = ml.listId')
        .innerJoin('product', 'p', 'ml.productId = p.id')
        .innerJoin('category', 'c', 'p.categoryId = c.id')
        .where('l.id = :id', { id })
        .orderBy('c.name, p.name')
        .getRawMany();

      return res.status(200).send({ marketList });
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
