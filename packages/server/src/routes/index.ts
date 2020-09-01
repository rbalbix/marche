import { Router } from 'express';
import { router as ProductRouter } from './ProductRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/product', ProductRouter);

// Export the base-router
export { router };
