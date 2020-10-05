import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { List } from '../entities';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import log from '../../services/logger';

export class ListController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const lists = await getRepository(List).find({
        select: ['id', 'name', 'productQuantity'],
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

  async store(req: Request, res: Response): Promise<Response> {
    try {
      const name = format(new Date(), 'dd-MMM-yyyy', {
        locale: ptBR
      }).toUpperCase();

      const result = await getRepository(List).save({ name });

      return res.status(200).send(result);
    } catch (err) {
      log.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
