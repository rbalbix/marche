import { Router } from 'express';
import { router as CategoryRouter } from './CategoryRouter';
import { router as ProductRouter } from './ProductRouter';
import { router as ListRouter } from './ListRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/category', CategoryRouter);
router.use('/product', ProductRouter);
router.use('/list', ListRouter);

// Export the base-router
export { router };
