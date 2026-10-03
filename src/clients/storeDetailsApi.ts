import type { StoreDetail } from '../models/StoreDetail.js';
export type { ProductItem, StoreDetail } from '../models/StoreDetail.js';

export function getStoreDetails(): Promise<Record<string, StoreDetail>> {
  return fetch('/api/store-details').then(async (response) => {
    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || `Permintaan API gagal (${response.status}).`);
    }
    return response.json() as Promise<Record<string, StoreDetail>>;
  });
}
