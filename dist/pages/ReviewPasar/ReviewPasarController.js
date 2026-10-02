import { getReviewData } from './ReviewPasarService.js';
export const getReviews = async (_req, res) => {
    const reviews = await getReviewData();
    res.json(reviews);
};
