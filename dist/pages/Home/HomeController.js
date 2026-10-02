import { getMarketData } from './HomeService.js';
export const getMarket = async (_req, res) => {
    const market = await getMarketData();
    res.json(market);
};
