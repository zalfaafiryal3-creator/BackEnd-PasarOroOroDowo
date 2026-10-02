import { getPromoData } from './PromoService.js';
export const getPromos = async (_req, res) => {
    const promos = await getPromoData();
    res.json(promos);
};
