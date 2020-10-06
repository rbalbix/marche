import { Router } from 'express';
import { router as CategoryRouter } from './CategoryRouter';
import { router as ProductRouter } from './ProductRouter';
import { router as ListRouter } from './ListRouter';
import { router as MarketListRouter } from './MarketListRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/category', CategoryRouter);
router.use('/product', ProductRouter);
router.use('/list', ListRouter);
router.use('/marketList', MarketListRouter);

// Export the base-router
export { router };
