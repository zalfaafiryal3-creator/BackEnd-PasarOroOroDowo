import { Router } from 'express';
import { getRecommendations } from './RekomendasiController.js';
const router = Router();
router.get('/recommendations', getRecommendations);
export default router;
