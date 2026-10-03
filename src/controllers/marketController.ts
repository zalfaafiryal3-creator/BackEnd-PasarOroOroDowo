import { Request, Response } from 'express';
import {
  getCategoryData,
  getMarketData,
  getProductData,
  getPromoData,
  getRecommendationData,
  getStoreData,
} from '../services/marketService.js';
import {
  addReview as createMarketReview,
  getReviews as getMarketReviews,
  getReviewSummary,
  incrementHelpful,
} from '../services/reviewService.js';
import { reviewCategories, type CategoryRatings, type NewMarketReview } from '../models/MarketReview.js';
import { getStoreDetails } from '../services/storeDetailsService.js';

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
  res.json(getMarketReviews());
};

export const getReviewsSummary = (_req: Request, res: Response) => {
  res.json(getReviewSummary());
};

function isCategoryRatings(value: unknown): value is CategoryRatings {
  if (!value || typeof value !== 'object') return false;
  const ratings = value as Record<string, unknown>;
  return reviewCategories.every((category) =>
    typeof ratings[category] === 'number' &&
    Number.isFinite(ratings[category]) &&
    ratings[category] >= 1 &&
    ratings[category] <= 5
  );
}

function isNewMarketReview(value: unknown): value is NewMarketReview {
  if (!value || typeof value !== 'object') return false;
  const review = value as Record<string, unknown>;
  return typeof review.name === 'string' &&
    typeof review.status === 'string' &&
    typeof review.rating === 'number' &&
    Number.isFinite(review.rating) &&
    review.rating >= 1 &&
    review.rating <= 5 &&
    typeof review.date === 'string' &&
    Array.isArray(review.tags) &&
    review.tags.every((tag) => typeof tag === 'string') &&
    typeof review.text === 'string' &&
    Array.isArray(review.photos) &&
    review.photos.every((photo) => typeof photo === 'string') &&
    review.helpful === 0 &&
    isCategoryRatings(review.categories);
}

export const postReview = (req: Request, res: Response) => {
  if (!isNewMarketReview(req.body)) {
    res.status(400).json({ error: 'Data ulasan tidak valid.' });
    return;
  }
  res.status(201).json(createMarketReview(req.body));
};

export const postReviewHelpful = (req: Request, res: Response) => {
  const reviewId = Number(req.params.id);
  if (!Number.isInteger(reviewId) || reviewId <= 0) {
    res.status(400).json({ error: 'ID ulasan tidak valid.' });
    return;
  }

  const review = incrementHelpful(reviewId);
  if (!review) {
    res.status(404).json({ error: 'Ulasan tidak ditemukan.' });
    return;
  }
  res.json(review);
};

export const getRecommendations = async (_req: Request, res: Response) => {
  const recommendations = await getRecommendationData();
  res.json(recommendations);
};

export const getStoreDetailsController = (_req: Request, res: Response) => {
  res.json(getStoreDetails());
};
