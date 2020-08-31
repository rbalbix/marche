import { Request, Response } from 'express';
import { OK, BAD_REQUEST } from 'http-status-codes';
import log from '../../services/logger';

export const index = async (req: Request, res: Response) => {
  try {
    return res.status(OK);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    return res.status(OK);
  } catch (err) {
    log.error(err);
    res.status(BAD_REQUEST).send('Algo deu errado. Tente novamente.');
  }
};
