const categories = [
    { id: 1, name: 'Pakaian', icon: '👕' },
    { id: 2, name: 'Sembako', icon: '🛒' },
    { id: 3, name: 'Makanan', icon: '🍱' },
    { id: 4, name: 'Perabotan', icon: '🪴' },
    { id: 5, name: 'Lainnya', icon: '✨' },
];
const market = {
    id: 1,
    name: 'Pasar Oro-Oro Dowo',
    description: 'Jl. Pasar Oro-Oro Dowo, pusat kebutuhan harian, kuliner, dan produk lokal dengan suasana pasar tradisional yang hidup.',
    location: 'Malang, Jawa Timur',
    openingHours: '07.00 - 21.00',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80',
};
const stores = [
    {
        id: 1,
        name: 'Lampu Kerang',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        products: '25 Produk',
        badge: 'Toko',
    },
    {
        id: 2,
        name: 'Bakso Bangkit Ayam Goreng',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        products: '18 Produk',
        badge: 'Toko',
    },
    {
        id: 3,
        name: 'Kopian-ku',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        products: '15 Produk',
        badge: 'Toko',
    },
    {
        id: 4,
        name: 'Wiwit Sayur',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        products: '20 Produk',
        badge: 'Toko',
    },
];
const products = [
    { id: 1, name: 'Bakso Spesial', price: 'Rp 20.000', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', category: 'Makanan' },
    { id: 2, name: 'Es Teh Manis', price: 'Rp 5.000', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2e7?auto=format&fit=crop&w=800&q=80', category: 'Minuman' },
    { id: 3, name: 'Beras 5kg', price: 'Rp 65.000', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31f?auto=format&fit=crop&w=800&q=80', category: 'Sembako' },
];
const recommendations = [
    {
        id: 1,
        title: 'Rencanakan Kunjungannmu',
        description: 'Temukan rekomendasi toko dan kuliner paling ramai di sekitar pasar hari ini.',
        cta: 'Lihat Rekomendasi',
    },
];
const promos = [
    {
        id: 1,
        title: 'Promo Hari Ini',
        description: 'Diskon khusus produk segar dan kuliner pasar.',
        discount: 'Diskon 20%',
    },
];
const reviews = [
    {
        id: 1,
        user: 'Ayu',
        review: 'Pasarnya ramai, bersih, dan banyak pilihan produk lokal.',
        rating: 5,
    },
    {
        id: 2,
        user: 'Deni',
        review: 'Cocok buat belanja kebutuhan harian sambil kuliner.',
        rating: 4,
    },
];
export const getMarketData = async () => market;
export const getCategoryData = async () => categories;
export const getStoreData = async () => stores;
export const getProductData = async () => products;
export const getPromoData = async () => promos;
export const getReviewData = async () => reviews;
export const getRecommendationData = async () => recommendations;
