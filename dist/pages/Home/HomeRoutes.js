import { Router } from 'express';
import { getMarket } from './HomeController.js';
const router = Router();
router.get('/market', getMarket);
export default router;
