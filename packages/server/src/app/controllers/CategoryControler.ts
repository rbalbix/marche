import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../entities';

import log from '../../services/logger';

export class CategoryController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const categories = await getRepository(Category)
        .createQueryBuilder('category')
        .orderBy('name')
        .getMany();

      return res.status(200).send(categories);
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
