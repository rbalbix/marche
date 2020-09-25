import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../entities';

import log from '../../services/logger';

export class ProductController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const products = await getRepository(Product).find({
        select: ['id', 'name', 'unity'],
        relations: ['category'],
        order: { name: 'ASC' }
      });

      return res.status(200).send(products);
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }

  async findByCategory(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const products = await getRepository(Product).find({
        select: ['id', 'name', 'unity'],
        relations: ['category'],
        where: { category: { id } },
        order: { name: 'ASC' }
      });

      return res.status(200).send(products);
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
