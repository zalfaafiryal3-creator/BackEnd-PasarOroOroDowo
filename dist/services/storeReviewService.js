let reviews = [
    {
        id: 1,
        name: 'Ibu Maya Lestari',
        date: '2 hari lalu • Pembeli Terverifikasi',
        text: 'Bahan katun adem banget, jahitan rapi! Pengiriman lewat kurir pasar cepat sampai dalam 25 menit. Bu Serli juga ramah sekali pas ditanya ukuran via chat.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Dimas Priyambodo',
        date: '1 minggu lalu • Pembeli Terverifikasi',
        text: 'Kemeja linen santai kualitasnya jempolan, warna sesuai foto etalase. Pilihan belanja terpercaya di Pasar Oro-Oro Dowo.',
        rating: 5,
    },
];
let nextReviewId = 3;
export function getStoreReviews() {
    return reviews;
}
export function addStoreReview(review) {
    const createdReview = {
        ...review,
        id: nextReviewId++,
    };
    reviews = [createdReview, ...reviews];
    return reviews;
}
