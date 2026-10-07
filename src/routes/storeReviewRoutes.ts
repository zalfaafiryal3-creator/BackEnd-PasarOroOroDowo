import { Router } from 'express';
import {
  getStoreReviewsController,
  postStoreReview,
} from '../controllers/storeReviewController.js';

const router = Router();

router.get('/store-reviews', getStoreReviewsController);
router.post('/store-reviews', postStoreReview);

export default router;