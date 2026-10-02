import { Request, Response } from 'express';
import {
  getCategoryData,
  getMarketData,
  getProductData,
  getPromoData,
  getRecommendationData,
  getReviewData,
  getStoreData,
} from '../services/marketService.js';

export const getMarket = async (_req: Request, res: Response) => {
  const market = await getMarketData();
  res.json(market);
};

export const getCategories = async (_req: Request, res: Response) => {
  const categories = await getCategoryData();
  res.json(categories);
};

export const getStores = async (_req: Request, res: Response) => {
  const stores = await getStoreData();
  res.json(stores);
};

export const getProducts = async (_req: Request, res: Response) => {
  const products = await getProductData();
  res.json(products);
};

export const getPromos = async (_req: Request, res: Response) => {
  const promos = await getPromoData();
  res.json(promos);
};

export const getReviews = async (_req: Request, res: Response) => {
  const reviews = await getReviewData();
  res.json(reviews);
};

export const getRecommendations = async (_req: Request, res: Response) => {
  const recommendations = await getRecommendationData();
  res.json(recommendations);
};
