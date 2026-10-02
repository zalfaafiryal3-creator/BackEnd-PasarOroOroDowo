import { Router } from 'express';
import { getReviews } from './ReviewPasarController.js';
const router = Router();
router.get('/reviews', getReviews);
export default router;
