export type Products = {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  imgUrl: string;
  createdAt: Date;
  userId: string | null;
};
