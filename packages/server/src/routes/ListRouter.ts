import { Router } from 'express';

import { ListController } from '../app/controllers';

// import { celebrate, Segments, Joi } from 'celebrate';

// Init shared
const router = Router();
const listController = new ListController();

/******************************************************************************
 *                    Get All Lists - "GET /list"
 ******************************************************************************/

router.get('/', listController.index);

/******************************************************************************
 *                      Post List - "POST /list"
 ******************************************************************************/

router.post('/', listController.store);

/******************************************************************************
 *                      Get Specific Product - "GET /product/:id"
 ******************************************************************************/

// router.get(
//   '/:id',
//   celebrate({
//     [Segments.PARAMS]: Joi.object().keys({
//       id: Joi.string().required()
//     })
//   }),
//   MatchController.show
// );

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export { router };
