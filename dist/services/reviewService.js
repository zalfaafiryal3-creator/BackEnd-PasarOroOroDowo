import { reviewCategories, } from '../models/MarketReview.js';
const defaultCategories = {
    'Kebersihan & Kerapian': 4.8,
    'Kelengkapan Komoditas': 4.8,
    'Keramahan Pedagang': 4.8,
    'Keamanan & Parkir': 4.8,
};
const initialRatingDistribution = {
    5: 1008,
    4: 220,
    3: 9,
    2: 2,
    1: 1,
};
const initialSummaryCount = 1240;
const initialSummaryAverage = 4.8;
let reviews = [
    {
        id: 3,
        name: 'ZALFAA',
        status: 'Pengunjung Setia',
        rating: 5,
        date: '2 hari lalu',
        tags: ['Kebersihan: Luar Biasa', 'Pasar Teratur'],
        text: 'Pasar tradisional paling bersih dan tertata di Malang! Lorongnya luas, tidak becek sama sekali, dan banyak juga sayuran segar, jajanan di sini nyaman banget. Pedagangnya juga ramah-ramah.',
        photos: ['/assets/2312e.png', '/assets/e576e.png'],
        helpful: 14,
        categories: {
            'Kebersihan & Kerapian': 5,
            'Kelengkapan Komoditas': 5,
            'Keramahan Pedagang': 5,
            'Keamanan & Parkir': 5,
        },
    },
    {
        id: 2,
        name: 'Rani',
        status: 'Pengunjung',
        rating: 5,
        date: '3 hari lalu',
        tags: ['Harga Terjangkau'],
        text: 'Sekarang makin modern, sudah banyak kios yang tertata dan pembayarannya QRIS. Kuliner legendaris di bagian belakang juga lengkap dan enak. Wajib cobain lumpur kentangnya!',
        photos: [],
        helpful: 8,
        categories: {
            'Kebersihan & Kerapian': 5,
            'Kelengkapan Komoditas': 5,
            'Keramahan Pedagang': 5,
            'Keamanan & Parkir': 4,
        },
    },
    {
        id: 1,
        name: 'Mifta',
        status: 'Pengunjung',
        rating: 4.8,
        date: '1 minggu lalu',
        tags: [],
        text: 'Tempatnya asri dan bersih. Parkir motor dan mobil tertata rapi. Kalau pagi hari sekitar jam 7–8 cukup ramai, tapi banyak pilihan tempat untuk nongkrong atau sarapan.',
        photos: [],
        helpful: 3,
        categories: {
            'Kebersihan & Kerapian': 5,
            'Kelengkapan Komoditas': 5,
            'Keramahan Pedagang': 4,
            'Keamanan & Parkir': 5,
        },
    },
];
let nextReviewId = 4;
let addedReviews = [];
export function getReviews() {
    return reviews;
}
export function addReview(review) {
    const createdReview = { ...review, id: nextReviewId++ };
    reviews = [createdReview, ...reviews];
    addedReviews = [createdReview, ...addedReviews];
    return createdReview;
}
export function incrementHelpful(reviewId) {
    const reviewIndex = reviews.findIndex(({ id }) => id === reviewId);
    if (reviewIndex === -1)
        return undefined;
    const updatedReview = { ...reviews[reviewIndex], helpful: reviews[reviewIndex].helpful + 1 };
    reviews = reviews.map((review, index) => index === reviewIndex ? updatedReview : review);
    return updatedReview;
}
export function getReviewSummary() {
    const categories = reviewCategories.reduce((averages, category) => {
        averages[category] = addedReviews.length
            ? (defaultCategories[category] * initialSummaryCount +
                addedReviews.reduce((total, review) => total + review.categories[category], 0)) / (initialSummaryCount + addedReviews.length)
            : defaultCategories[category];
        return averages;
    }, { ...defaultCategories });
    return {
        count: initialSummaryCount + addedReviews.length,
        average: (initialSummaryAverage * initialSummaryCount +
            addedReviews.reduce((total, review) => total + review.rating, 0)) / (initialSummaryCount + addedReviews.length),
        categories,
        ratingDistribution: addedReviews.reduce((distribution, review) => {
            const rating = Math.round(review.rating);
            distribution[rating] += 1;
            return distribution;
        }, { ...initialRatingDistribution }),
    };
}
