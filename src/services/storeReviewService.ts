export interface StoreReview {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
}

const storageKey = "pasar-oro-oro-dowo-store-reviews";

const initialReviews: StoreReview[] = [
  {
    id: 1,
    name: "Ibu Maya Lestari",
    date: "2 hari lalu • Pembeli Terverifikasi",
    text: "“Bahan katun adem banget, jahitan rapi! Pengiriman lewat kurir pasar cepat sampai dalam 25 menit. Bu Serli juga ramah sekali pas ditanya ukuran via chat.”",
    rating: 5,
  },
  {
    id: 2,
    name: "Dimas Priyambodo",
    date: "1 minggu lalu • Pembeli Terverifikasi",
    text: "“Kemeja linen santai kualitasnya jempolan, warna sesuai foto etalase. Pilihan belanja terpercaya di Pasar Oro-Oro Dowo.”",
    rating: 5,
  },
];

function readAddedReviews(): StoreReview[] {
  const storedReviews = localStorage.getItem(storageKey);
  if (!storedReviews) return [];

  let parsedReviews: unknown;
  try {
    parsedReviews = JSON.parse(storedReviews);
  } catch {
    throw new Error("Data ulasan toko tersimpan tidak dapat dibaca.");
  }

  if (
    !Array.isArray(parsedReviews) ||
    !parsedReviews.every(
      (review) =>
        review &&
        typeof review.id === "number" &&
        typeof review.name === "string" &&
        typeof review.date === "string" &&
        typeof review.text === "string" &&
        typeof review.rating === "number"
    )
  ) {
    throw new Error("Format data ulasan toko tersimpan tidak valid.");
  }

  return parsedReviews;
}

export function getStoreReviews(): StoreReview[] {
  return [...readAddedReviews(), ...initialReviews];
}

export function addStoreReview(
  review: Omit<StoreReview, "id">
): StoreReview[] {
  const addedReviews = readAddedReviews();
  const nextReview = {
    ...review,
    id: Math.max(0, ...addedReviews.map(({ id }) => id), ...initialReviews.map(({ id }) => id)) + 1,
  };
  localStorage.setItem(storageKey, JSON.stringify([nextReview, ...addedReviews]));
  return getStoreReviews();
}
