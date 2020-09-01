import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../entities';

import log from '../../services/logger';

export class ProductController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const products = await getRepository(Product).find();

      return res.status(200).send(products);
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
