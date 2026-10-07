import { Request, Response } from 'express';
import {
  addStoreReview,
  getStoreReviews,
  type StoreReview,
} from '../services/storeReviewService.js';

export const getStoreReviewsController = (_req: Request, res: Response) => {
  res.json(getStoreReviews());
};

export const postStoreReview = (req: Request, res: Response) => {
  const review = req.body as Omit<StoreReview, 'id'>;

  if (
    typeof review.name !== 'string' ||
    typeof review.date !== 'string' ||
    typeof review.text !== 'string' ||
    typeof review.rating !== 'number'
  ) {
    res.status(400).json({ error: 'Data ulasan toko tidak valid.' });
    return;
  }

  res.status(201).json(addStoreReview(review));
};