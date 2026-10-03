import type {
  MarketReview,
  NewMarketReview,
  ReviewSummary,
} from '../models/MarketReview.js';
export { reviewCategories } from '../models/MarketReview.js';
export type {
  CategoryRatings,
  MarketReview,
  NewMarketReview,
  ReviewSummary,
} from '../models/MarketReview.js';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`/api${path}`, {
    ...init,
    headers: {
      ...(init?.body ? { 'Content-Type': 'application/json' } : {}),
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Permintaan API gagal (${response.status}).`);
  }
  return response.json() as Promise<T>;
}

export function getReviews(): Promise<MarketReview[]> {
  return request<MarketReview[]>('/reviews');
}

export function getReviewSummary(): Promise<ReviewSummary> {
  return request<ReviewSummary>('/reviews/summary');
}

export function addReview(review: NewMarketReview): Promise<MarketReview> {
  return request<MarketReview>('/reviews', {
    method: 'POST',
    body: JSON.stringify(review),
  });
}

export function incrementHelpful(reviewId: number): Promise<MarketReview> {
  return request<MarketReview>(`/reviews/${reviewId}/helpful`, { method: 'POST' });
}
