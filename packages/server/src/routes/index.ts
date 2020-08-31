import { Router } from 'express';
import MatchRouter from './MatchRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/match', MatchRouter);

// Export the base-router
export default router;
