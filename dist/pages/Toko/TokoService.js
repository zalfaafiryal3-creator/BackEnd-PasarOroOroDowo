const categories = [
    { id: 1, name: 'Pakaian', icon: '👕' },
    { id: 2, name: 'Sembako', icon: '🛒' },
    { id: 3, name: 'Makanan', icon: '🍱' },
    { id: 4, name: 'Perabotan', icon: '🪴' },
    { id: 5, name: 'Lainnya', icon: '✨' },
];
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
export const getCategoryData = async () => categories;
export const getStoreData = async () => stores;
export const getProductData = async () => products;
