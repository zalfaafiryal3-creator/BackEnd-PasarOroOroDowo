import { Router } from 'express';
import { getPromos } from './PromoController.js';
const router = Router();
router.get('/promos', getPromos);
export default router;
