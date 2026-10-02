import { getRecommendationData } from './RekomendasiService.js';
export const getRecommendations = async (_req, res) => {
    const recommendations = await getRecommendationData();
    res.json(recommendations);
};
