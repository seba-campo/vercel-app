import { fs } from "../lib/firebase";

export interface ProductVariant {
  color: string;
  material: string;
  price: number;
  stock: number;
  variantSku: string;
  imageUrl: string;
}

export class Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  brand: string;
  category: string;
  mainImageUrl: string;
  isActive: boolean;
  createdAt: string; // Se mantiene como string para mapeo directo desde JSON
  variants: ProductVariant[];
//   collection = fs.collection("products");
//   private ref: FirebaseFirestore.DocumentReference
  constructor(data: {
    id: string;
    name: string;
    description: string;
    sku: string;
    brand: string;
    category: string;
    mainImageUrl: string;
    isActive: boolean;
    createdAt: string;
    variants: ProductVariant[];
  }) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.sku = data.sku;
    this.brand = data.brand;
    this.category = data.category;
    this.mainImageUrl = data.mainImageUrl;
    this.isActive = data.isActive;
    this.createdAt = data.createdAt;
    this.variants = data.variants;
  }

  // --- MÉTODOS ÚTILES ---

  /**
   * Calcula y devuelve el stock total sumando el stock de todas las variantes.
   * @returns {number} El stock total del producto.
   */
  public getTotalStock(): number {
    return this.variants.reduce((total, variant) => total + variant.stock, 0);
  }

  /**
   * Busca y devuelve una variante específica por su SKU.
   * @param sku El SKU de la variante a buscar.
   * @returns {ProductVariant | undefined} La variante encontrada o undefined si no existe.
   */
  public getVariantBySku(sku: string): ProductVariant | undefined {
    return this.variants.find(variant => variant.variantSku === sku);
  }
  
  /**
   * Devuelve el precio de la variante más económica.
   * @returns {number | null} El precio mínimo, o null si no hay variantes.
   */
  public getPriceFrom(): number | null {
      if (this.variants.length === 0) {
          return null;
      }
      return Math.min(...this.variants.map(v => v.price));
  }

  /**
   * Devuelve la fecha de creación como un objeto Date de JavaScript.
   * Esto es útil para realizar comparaciones o formatear fechas.
   * @returns {Date} El objeto Date de la fecha de creación.
   */
  public getCreatedAtDate(): Date {
    return new Date(this.createdAt);
  }

  /**
   * Formatea el precio de una variante para mostrarlo en la UI.
   * @param price El precio numérico a formatear.
   * @param locale El formato local (ej: 'es-AR' para Argentina).
   * @param currency La moneda (ej: 'ARS' para pesos argentinos).
   * @returns {string} El precio formateado como string.
   */
  public static formatPrice(price: number, locale: string = 'es-AR', currency: string = 'ARS'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(price);
  }
}