export interface ProductItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  unit: string;
}

export interface StoreDetail {
  id: string;
  name: string;
  category: string;
  products: ProductItem[];
}
