import { Router } from 'express';

import { MarketListController } from '../app/controllers';

// Init shared
const router = Router();
const marketListController = new MarketListController();

/******************************************************************************
 *                      Post Market List - "POST /marketList"
 ******************************************************************************/

router.post('/', marketListController.store);

/******************************************************************************
 *                      Put Market List - "PUT /marketList"
 ******************************************************************************/

router.put('/:id', marketListController.update);

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export { router };
