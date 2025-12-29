export interface IProduct {
  name: string;
  description: string;
  sku: string;
  brand: string;
  category: string;
  mainImageUrl: string;
  isActive: boolean;
  createdAt: string;
  variants: IVariant[];
  id: string;
}

export interface IVariant {
  color: string;
  material: string;
  price: number;
  stock: number;
  variantSku: string;
  imageUrl: string;
}