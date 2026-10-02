import { getCategoryData, getMarketData, getProductData, getPromoData, getRecommendationData, getReviewData, getStoreData, } from '../services/marketService.js';
export const getMarket = async (_req, res) => {
    const market = await getMarketData();
    res.json(market);
};
export const getCategories = async (_req, res) => {
    const categories = await getCategoryData();
    res.json(categories);
};
export const getStores = async (_req, res) => {
    const stores = await getStoreData();
    res.json(stores);
};
export const getProducts = async (_req, res) => {
    const products = await getProductData();
    res.json(products);
};
export const getPromos = async (_req, res) => {
    const promos = await getPromoData();
    res.json(promos);
};
export const getReviews = async (_req, res) => {
    const reviews = await getReviewData();
    res.json(reviews);
};
export const getRecommendations = async (_req, res) => {
    const recommendations = await getRecommendationData();
    res.json(recommendations);
};
