import { getCategoryData, getProductData, getStoreData, } from './TokoService.js';
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
