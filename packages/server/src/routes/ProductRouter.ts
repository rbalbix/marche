import { Router } from 'express';

import { ProductController } from '../app/controllers';

// import { celebrate, Segments, Joi } from 'celebrate';

// Init shared
const router = Router();
const productController = new ProductController();

/******************************************************************************
 *                      Get Product - "GET /product"
 ******************************************************************************/

router.get('/', productController.index);

/******************************************************************************
 *         Get Products by Category - "GET /product/category/:id"
 ******************************************************************************/

router.get('/category/:id', productController.findByCategory);

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
