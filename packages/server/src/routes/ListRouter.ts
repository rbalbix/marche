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
 *              Get specific List - "GET /list/:id"
 ******************************************************************************/

router.get('/:id', listController.show);

/******************************************************************************
 *                      Post List - "POST /list"
 ******************************************************************************/

router.post('/', listController.store);

/******************************************************************************
 *                     Delete List - "DELETE /list/:id"
 ******************************************************************************/

router.delete('/:id', listController.delete);

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
