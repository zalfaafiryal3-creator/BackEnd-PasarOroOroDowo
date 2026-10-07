import { addStoreReview, getStoreReviews, } from '../services/storeReviewService.js';
export const getStoreReviewsController = (_req, res) => {
    res.json(getStoreReviews());
};
export const postStoreReview = (req, res) => {
    const review = req.body;
    if (typeof review.name !== 'string' ||
        typeof review.date !== 'string' ||
        typeof review.text !== 'string' ||
        typeof review.rating !== 'number') {
        res.status(400).json({ error: 'Data ulasan toko tidak valid.' });
        return;
    }
    res.status(201).json(addStoreReview(review));
};
