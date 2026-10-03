export { reviewCategories } from '../models/MarketReview.js';
async function request(path, init) {
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
    return response.json();
}
export function getReviews() {
    return request('/reviews');
}
export function getReviewSummary() {
    return request('/reviews/summary');
}
export function addReview(review) {
    return request('/reviews', {
        method: 'POST',
        body: JSON.stringify(review),
    });
}
export function incrementHelpful(reviewId) {
    return request(`/reviews/${reviewId}/helpful`, { method: 'POST' });
}
