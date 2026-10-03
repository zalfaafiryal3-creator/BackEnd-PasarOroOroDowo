import { Router } from 'express';
import {
  getCategories,
  getMarket,
  getProducts,
  getPromos,
  getRecommendations,
  getReviews,
  getReviewsSummary,
  getStoreDetailsController,
  postReview,
  postReviewHelpful,
  getStores,
} from '../controllers/marketController.js';

const router = Router();

router.get('/market', getMarket);
router.get('/categories', getCategories);
router.get('/stores', getStores);
router.get('/products', getProducts);
router.get('/promos', getPromos);
router.get('/reviews', getReviews);
router.get('/reviews/summary', getReviewsSummary);
router.post('/reviews', postReview);
router.post('/reviews/:id/helpful', postReviewHelpful);
router.get('/store-details', getStoreDetailsController);
router.get('/recommendations', getRecommendations);

export default router;
