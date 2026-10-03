export const reviewCategories = [
  'Kebersihan & Kerapian',
  'Kelengkapan Komoditas',
  'Keramahan Pedagang',
  'Keamanan & Parkir',
] as const;

export type CategoryRatings = Record<(typeof reviewCategories)[number], number>;

export interface MarketReview {
  id: number;
  name: string;
  status: string;
  rating: number;
  date: string;
  tags: string[];
  text: string;
  photos: string[];
  helpful: number;
  categories: CategoryRatings;
}

export type NewMarketReview = Omit<MarketReview, 'id'>;

export interface ReviewSummary {
  count: number;
  average: number;
  categories: CategoryRatings;
  ratingDistribution: Record<1 | 2 | 3 | 4 | 5, number>;
}
