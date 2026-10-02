import { Router } from 'express';
import { getCategories, getProducts, getStores, } from './TokoController.js';
const router = Router();
router.get('/categories', getCategories);
router.get('/stores', getStores);
router.get('/products', getProducts);
export default router;
