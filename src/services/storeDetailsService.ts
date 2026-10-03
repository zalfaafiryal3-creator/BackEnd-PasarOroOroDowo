import type { StoreDetail } from '../models/StoreDetail.js';

const storeDetails: Record<string, StoreDetail> = {
  'lumpur-kentang-27': {
    id: 'lumpur-kentang-27',
    name: 'Lumpur Kentang 27',
    category: 'Kuliner Legendaris',
    products: [{
      id: 'kue-lumpur',
      name: 'Kue Lumpur',
      desc: 'Resep otentik kentang lumper',
      price: 'Rp 7.000',
      unit: '/pcs',
    }],
  },
  'bakso-goreng-bangkit': {
    id: 'bakso-goreng-bangkit',
    name: 'Bakso Goreng Ayam Bangkit',
    category: 'Makanan',
    products: [{
      id: 'bakso-goreng',
      name: 'Bangkit Bakso Goreng Ayam',
      desc: 'Rasanya enak',
      price: 'Rp 7.000',
      unit: '/pcs',
    }],
  },
  'klepon-ku': {
    id: 'klepon-ku',
    name: 'Klepon-ku',
    category: 'Makanan',
    products: [{
      id: 'klepon-original',
      name: 'Klepon Original',
      desc: 'Klepon-ku',
      price: 'Rp 15.000',
      unit: '/10 biji',
    }],
  },
};

export function getStoreDetails(): Record<string, StoreDetail> {
  return storeDetails;
}
