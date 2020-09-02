import { Router } from 'express';

import { CategoryController } from '../app/controllers';

// import { celebrate, Segments, Joi } from 'celebrate';

// Init shared
const router = Router();
const categoryController = new CategoryController();

/******************************************************************************
 *                      Get Product - "GET /product"
 ******************************************************************************/

router.get('/', categoryController.index);

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
