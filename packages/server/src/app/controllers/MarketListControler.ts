import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import log from '../../services/logger';

export class MarketListController {
  async store(req: Request, res: Response): Promise<Response> {
    try {
      console.log(req.body);
      return res.status(200).send({ message: 'ok' });
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
