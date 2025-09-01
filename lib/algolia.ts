import { SearchClient } from "algoliasearch";
import algoliasearch from "algoliasearch";

const appID = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_API_KEY;
export const algolia = algoliasearch(appID, apiKey);

const products = [
  {
    "id": "a1b2c3d4-e5f6-4789-9012-3456789abcde",
    "name": "Batería de Cocina de Acero - HogarStyle",
    "description": "Un producto de alta calidad de la marca HogarStyle. Ideal para tu cocina.",
    "sku": "BDC-821",
    "brand": "HogarStyle",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/a1b2c3d4-e5f6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:35:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 185.50,
        "stock": 50,
        "variantSku": "BDC-821-PLA",
        "imageUrl": "https://picsum.photos/seed/a1b2c3d4-e5f6-plateado/400/400"
      },
      {
        "color": "Negro",
        "material": "Acero Inoxidable",
        "price": 195.00,
        "stock": 35,
        "variantSku": "BDC-821-NEG",
        "imageUrl": "https://picsum.photos/seed/a1b2c3d4-e5f6-negro/400/400"
      }
    ]
  },
  {
    "id": "f1g2h3j4-k5l6-4789-a1b2-c3d4e5f6g7h8",
    "name": "Vajilla de Cerámica 16 Piezas - MesaLista",
    "description": "Un producto de alta calidad de la marca MesaLista. Ideal para tu vajilla.",
    "sku": "VDC-451",
    "brand": "MesaLista",
    "category": "Vajilla",
    "mainImageUrl": "https://picsum.photos/seed/f1g2h3j4-k5l6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:36:00Z",
    "variants": [
      {
        "color": "Blanco",
        "material": "Cerámica",
        "price": 105.50,
        "stock": 45,
        "variantSku": "VDC-451-BLA",
        "imageUrl": "https://picsum.photos/seed/f1g2h3j4-k5l6-blanco/400/400"
      },
      {
        "color": "Gris",
        "material": "Cerámica",
        "price": 109.99,
        "stock": 30,
        "variantSku": "VDC-451-GRI",
        "imageUrl": "https://picsum.photos/seed/f1g2h3j4-k5l6-gris/400/400"
      }
    ]
  },
  {
    "id": "i9j8k7l6-m5n4-4321-b1c2-d3e4f5g6h7i8",
    "name": "Set de 6 Repasadores de Algodón - CocinaFácil",
    "description": "Un producto de alta calidad de la marca CocinaFácil. Ideal para tus textiles.",
    "sku": "SDR-333",
    "brand": "CocinaFácil",
    "category": "Textiles",
    "mainImageUrl": "https://picsum.photos/seed/i9j8k7l6-m5n4/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:37:00Z",
    "variants": [
      {
        "color": "Beige",
        "material": "Algodón",
        "price": 18.99,
        "stock": 120,
        "variantSku": "SDR-333-BEI",
        "imageUrl": "https://picsum.photos/seed/i9j8k7l6-m5n4-beige/400/400"
      },
      {
        "color": "Verde",
        "material": "Algodón",
        "price": 19.99,
        "stock": 90,
        "variantSku": "SDR-333-VER",
        "imageUrl": "https://picsum.photos/seed/i9j8k7l6-m5n4-verde/400/400"
      }
    ]
  },
  {
    "id": "p1o2i3u4-y5t6-4r7e-w8q9-a1s2d3f4g5h6",
    "name": "Tabla de Cortar de Bambú - ChefPro",
    "description": "Un producto de alta calidad de la marca ChefPro. Ideal para tu cocina.",
    "sku": "TDC-205",
    "brand": "ChefPro",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/p1o2i3u4-y5t6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:38:00Z",
    "variants": [
      {
        "color": "Natural",
        "material": "Bambú",
        "price": 25.00,
        "stock": 200,
        "variantSku": "TDC-205-NAT",
        "imageUrl": "https://picsum.photos/seed/p1o2i3u4-y5t6-natural/400/400"
      }
    ]
  },
  {
    "id": "z1x2c3v4-b5n6-4m7l-k8j9-h1g2f3d4s5a6",
    "name": "Juego de Tazas de Café - HogarStyle",
    "description": "Un producto de alta calidad de la marca HogarStyle. Ideal para tu vajilla.",
    "sku": "JTC-110",
    "brand": "HogarStyle",
    "category": "Vajilla",
    "mainImageUrl": "https://picsum.photos/seed/z1x2c3v4-b5n6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:39:00Z",
    "variants": [
      {
        "color": "Blanco",
        "material": "Cerámica",
        "price": 35.99,
        "stock": 80,
        "variantSku": "JTC-110-BLA",
        "imageUrl": "https://picsum.photos/seed/z1x2c3v4-b5n6-blanco/400/400"
      },
      {
        "color": "Negro",
        "material": "Cerámica",
        "price": 37.99,
        "stock": 60,
        "variantSku": "JTC-110-NEG",
        "imageUrl": "https://picsum.photos/seed/z1x2c3v4-b5n6-negro/400/400"
      }
    ]
  },
  {
    "id": "q9w8e7r6-t5y4-4u3i-o2p1-a1s2d3f4g5h6",
    "name": "Mantel de Lino Antimanchas - MesaLista",
    "description": "Un producto de alta calidad de la marca MesaLista. Ideal para tus textiles.",
    "sku": "MLA-501",
    "brand": "MesaLista",
    "category": "Textiles",
    "mainImageUrl": "https://picsum.photos/seed/q9w8e7r6-t5y4/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:40:00Z",
    "variants": [
      {
        "color": "Gris",
        "material": "Lino",
        "price": 45.00,
        "stock": 70,
        "variantSku": "MLA-501-GRI",
        "imageUrl": "https://picsum.photos/seed/q9w8e7r6-t5y4-gris/400/400"
      }
    ]
  },
  {
    "id": "a1b3c2d4-f6e5-4g7h-8i9j-k1l2m3n4o5p6",
    "name": "Set de Cuchillos de Chef - ChefPro",
    "description": "Un producto de alta calidad de la marca ChefPro. Ideal para tu cocina.",
    "sku": "SDC-910",
    "brand": "ChefPro",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/a1b3c2d4-f6e5/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:41:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 99.99,
        "stock": 40,
        "variantSku": "SDC-910-PLA",
        "imageUrl": "https://picsum.photos/seed/a1b3c2d4-f6e5-plateado/400/400"
      }
    ]
  },
  {
    "id": "z9x8c7v6-b5n4-4m3l-k2j1-h9g8f7d6s5a4",
    "name": "Termo de 1 Litro - BazarTotal",
    "description": "Un producto de alta calidad de la marca BazarTotal. Ideal para tus accesorios.",
    "sku": "T1L-001",
    "brand": "BazarTotal",
    "category": "Accesorios",
    "mainImageUrl": "https://picsum.photos/seed/z9x8c7v6-b5n4/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:42:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 55.00,
        "stock": 150,
        "variantSku": "T1L-001-PLA",
        "imageUrl": "https://picsum.photos/seed/z9x8c7v6-b5n4-plateado/400/400"
      },
      {
        "color": "Verde",
        "material": "Acero Inoxidable",
        "price": 58.50,
        "stock": 90,
        "variantSku": "T1L-001-VER",
        "imageUrl": "https://picsum.photos/seed/z9x8c7v6-b5n4-verde/400/400"
      }
    ]
  },
  {
    "id": "q1w2e3r4-t5y6-4u7i-o8p9-a1s2d3f4g5h6",
    "name": "Bowl Ensaladera Grande de Madera - MesaLista",
    "description": "Un producto de alta calidad de la marca MesaLista. Ideal para tu vajilla.",
    "sku": "BEG-303",
    "brand": "MesaLista",
    "category": "Vajilla",
    "mainImageUrl": "https://picsum.photos/seed/q1w2e3r4-t5y6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:43:00Z",
    "variants": [
      {
        "color": "Madera",
        "material": "Madera",
        "price": 32.00,
        "stock": 60,
        "variantSku": "BEG-303-MAD",
        "imageUrl": "https://picsum.photos/seed/q1w2e3r4-t5y6-madera/400/400"
      }
    ]
  },
  {
    "id": "u7y6t5r4-e3w2-4q1a-s2d3-f4g5h6j7k8l9",
    "name": "Delantal de Cocina de Jean - CocinaFácil",
    "description": "Un producto de alta calidad de la marca CocinaFácil. Ideal para tus textiles.",
    "sku": "DCD-745",
    "brand": "CocinaFácil",
    "category": "Textiles",
    "mainImageUrl": "https://picsum.photos/seed/u7y6t5r4-e3w2/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:44:00Z",
    "variants": [
      {
        "color": "Azul",
        "material": "Jean",
        "price": 28.99,
        "stock": 110,
        "variantSku": "DCD-745-AZU",
        "imageUrl": "https://picsum.photos/seed/u7y6t5r4-e3w2-azul/400/400"
      }
    ]
  },
  {
    "id": "m1n2b3v4-c5x6-4z7l-k8j9-h1g2f3d4s5a6",
    "name": "Escurridor de Platos de Acero - HogarStyle",
    "description": "Un producto de alta calidad de la marca HogarStyle. Ideal para tu cocina.",
    "sku": "EDP-612",
    "brand": "HogarStyle",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/m1n2b3v4-c5x6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:45:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 42.50,
        "stock": 95,
        "variantSku": "EDP-612-PLA",
        "imageUrl": "https://picsum.photos/seed/m1n2b3v4-c5x6-plateado/400/400"
      }
    ]
  },
  {
    "id": "o1p2i3u4-y5t6-4r7e-w8q9-a1s2d3f4g5h6",
    "name": "Juego de Cubiertos 24 Piezas - MesaLista",
    "description": "Un producto de alta calidad de la marca MesaLista. Ideal para tu vajilla.",
    "sku": "JDC-488",
    "brand": "MesaLista",
    "category": "Vajilla",
    "mainImageUrl": "https://picsum.photos/seed/o1p2i3u4-y5t6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:46:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 65.00,
        "stock": 88,
        "variantSku": "JDC-488-PLA",
        "imageUrl": "https://picsum.photos/seed/o1p2i3u4-y5t6-plateado/400/400"
      },
      {
        "color": "Dorado",
        "material": "Acero Inoxidable",
        "price": 75.00,
        "stock": 50,
        "variantSku": "JDC-488-DOR",
        "imageUrl": "https://picsum.photos/seed/o1p2i3u4-y5t6-dorado/400/400"
      }
    ]
  },
  {
    "id": "l1k2j3h4-g5f6-4d7s-a8s9-d1f2g3h4j5k6",
    "name": "Set de Utensilios de Silicona - ChefPro",
    "description": "Un producto de alta calidad de la marca ChefPro. Ideal para tu cocina.",
    "sku": "SDU-701",
    "brand": "ChefPro",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/l1k2j3h4-g5f6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:47:00Z",
    "variants": [
      {
        "color": "Rojo",
        "material": "Silicona",
        "price": 22.99,
        "stock": 140,
        "variantSku": "SDU-701-ROJ",
        "imageUrl": "https://picsum.photos/seed/l1k2j3h4-g5f6-rojo/400/400"
      }
    ]
  },
  {
    "id": "b1n2m3c4-v5x6-4z7l-k8j9-h1g2f3d4s5a6",
    "name": "Frasco Hermético de Vidrio - BazarTotal",
    "description": "Un producto de alta calidad de la marca BazarTotal. Ideal para tus accesorios.",
    "sku": "FHV-101",
    "brand": "BazarTotal",
    "category": "Accesorios",
    "mainImageUrl": "https://picsum.photos/seed/b1n2m3c4-v5x6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:48:00Z",
    "variants": [
      {
        "color": "Transparente",
        "material": "Vidrio",
        "price": 8.50,
        "stock": 300,
        "variantSku": "FHV-101-TRA",
        "imageUrl": "https://picsum.photos/seed/b1n2m3c4-v5x6-transparente/400/400"
      }
    ]
  },
  {
    "id": "e1r2t3y4-u5i6-4o7p-a8s9-d1f2g3h4j5k6",
    "name": "Set de Vasos de Vidrio Labrado - HogarStyle",
    "description": "Un producto de alta calidad de la marca HogarStyle. Ideal para tu vajilla.",
    "sku": "SVV-230",
    "brand": "HogarStyle",
    "category": "Vajilla",
    "mainImageUrl": "https://picsum.photos/seed/e1r2t3y4-u5i6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:49:00Z",
    "variants": [
      {
        "color": "Transparente",
        "material": "Vidrio",
        "price": 29.99,
        "stock": 110,
        "variantSku": "SVV-230-TRA",
        "imageUrl": "https://picsum.photos/seed/e1r2t3y4-u5i6-transparente/400/400"
      }
    ]
  },
  {
    "id": "k1j2h3g4-f5d6-4s7a-p8o9-i1u2y3t4r5e6",
    "name": "Mate de Acero Inoxidable - BazarTotal",
    "description": "Un producto de alta calidad de la marca BazarTotal. Ideal para tus accesorios.",
    "sku": "MAI-007",
    "brand": "BazarTotal",
    "category": "Accesorios",
    "mainImageUrl": "https://picsum.photos/seed/k1j2h3g4-f5d6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:50:00Z",
    "variants": [
      {
        "color": "Negro",
        "material": "Acero Inoxidable",
        "price": 35.00,
        "stock": 90,
        "variantSku": "MAI-007-NEG",
        "imageUrl": "https://picsum.photos/seed/k1j2h3g4-f5d6-negro/400/400"
      },
      {
        "color": "Blanco",
        "material": "Acero Inoxidable",
        "price": 35.00,
        "stock": 120,
        "variantSku": "MAI-007-BLA",
        "imageUrl": "https://picsum.photos/seed/k1j2h3g4-f5d6-blanco/400/400"
      }
    ]
  },
  {
    "id": "d1s2a3f4-g5h6-4j7k-l8m9-n1b2v3c4x5z6",
    "name": "Balanza de Cocina Digital - ChefPro",
    "description": "Un producto de alta calidad de la marca ChefPro. Ideal para tu cocina.",
    "sku": "BCD-444",
    "brand": "ChefPro",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/d1s2a3f4-g5h6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:51:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 19.99,
        "stock": 180,
        "variantSku": "BCD-444-PLA",
        "imageUrl": "https://picsum.photos/seed/d1s2a3f4-g5h6-plateado/400/400"
      }
    ]
  },
  {
    "id": "h1g2f3d4-s5a6-4q7w-e8r9-t1y2u3i4o5p6",
    "name": "Camino de Mesa Rústico - MesaLista",
    "description": "Un producto de alta calidad de la marca MesaLista. Ideal para tus textiles.",
    "sku": "CMR-818",
    "brand": "MesaLista",
    "category": "Textiles",
    "mainImageUrl": "https://picsum.photos/seed/h1g2f3d4-s5a6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:52:00Z",
    "variants": [
      {
        "color": "Beige",
        "material": "Yute",
        "price": 24.50,
        "stock": 95,
        "variantSku": "CMR-818-BEI",
        "imageUrl": "https://picsum.photos/seed/h1g2f3d4-s5a6-beige/400/400"
      }
    ]
  },
  {
    "id": "v1c2x3z4-a5s6-4d7f-g8h9-j1k2l3m4n5b6",
    "name": "Salero y Pimentero de Diseño - HogarStyle",
    "description": "Un producto de alta calidad de la marca HogarStyle. Ideal para tus accesorios.",
    "sku": "SPD-121",
    "brand": "HogarStyle",
    "category": "Accesorios",
    "mainImageUrl": "https://picsum.photos/seed/v1c2x3z4-a5s6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:53:00Z",
    "variants": [
      {
        "color": "Blanco",
        "material": "Cerámica",
        "price": 15.99,
        "stock": 130,
        "variantSku": "SPD-121-BLA",
        "imageUrl": "https://picsum.photos/seed/v1c2x3z4-a5s6-blanco/400/400"
      },
      {
        "color": "Negro",
        "material": "Cerámica",
        "price": 15.99,
        "stock": 110,
        "variantSku": "SPD-121-NEG",
        "imageUrl": "https://picsum.photos/seed/v1c2x3z4-a5s6-negro/400/400"
      }
    ]
  },
  {
    "id": "y1t2r3e4-w5q6-4a7s-d8f9-g1h2j3k4l5m6",
    "name": "Wok de Hierro Fundido - ChefPro",
    "description": "Un producto de alta calidad de la marca ChefPro. Ideal para tu cocina.",
    "sku": "WHF-555",
    "brand": "ChefPro",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/y1t2r3e4-w5q6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:54:00Z",
    "variants": [
      {
        "color": "Negro",
        "material": "Hierro Fundido",
        "price": 65.00,
        "stock": 60,
        "variantSku": "WHF-555-NEG",
        "imageUrl": "https://picsum.photos/seed/y1t2r3e4-w5q6-negro/400/400"
      }
    ]
  },
  {
    "id": "f1g3h2j4-k6l5-4m7n-b8v9-c1x2z3a4s5d6",
    "name": "Juego de Sartenes Antiadherentes - CocinaFácil",
    "description": "Un producto de alta calidad de la marca CocinaFácil. Ideal para tu cocina.",
    "sku": "JSA-789",
    "brand": "CocinaFácil",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/f1g3h2j4-k6l5/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:55:00Z",
    "variants": [
      {
        "color": "Negro",
        "material": "Aluminio",
        "price": 89.99,
        "stock": 70,
        "variantSku": "JSA-789-NEG",
        "imageUrl": "https://picsum.photos/seed/f1g3h2j4-k6l5-negro/400/400"
      }
    ]
  },
  {
    "id": "l1k2j3h4-g5f6-4d7s-a8s9-d1f2g3h4j5k7",
    "name": "Platos de Sitio de Yute - MesaLista",
    "description": "Un producto de alta calidad de la marca MesaLista. Ideal para tu vajilla.",
    "sku": "PDS-301",
    "brand": "MesaLista",
    "category": "Vajilla",
    "mainImageUrl": "https://picsum.photos/seed/l1k2j3h4-g5f6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:56:00Z",
    "variants": [
      {
        "color": "Natural",
        "material": "Yute",
        "price": 12.99,
        "stock": 250,
        "variantSku": "PDS-301-NAT",
        "imageUrl": "https://picsum.photos/seed/l1k2j3h4-g5f6-natural/400/400"
      }
    ]
  },
  {
    "id": "p9o8i7u6-y5t4-4r3e-w2q1-a1s2d3f4g5h7",
    "name": "Guantes de Cocina de Silicona - BazarTotal",
    "description": "Un producto de alta calidad de la marca BazarTotal. Ideal para tus accesorios.",
    "sku": "GCS-111",
    "brand": "BazarTotal",
    "category": "Accesorios",
    "mainImageUrl": "https://picsum.photos/seed/p9o8i7u6-y5t4/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:57:00Z",
    "variants": [
      {
        "color": "Gris",
        "material": "Silicona",
        "price": 14.99,
        "stock": 180,
        "variantSku": "GCS-111-GRI",
        "imageUrl": "https://picsum.photos/seed/p9o8i7u6-y5t4-gris/400/400"
      }
    ]
  },
  {
    "id": "z1x2c3v4-b5n6-4m7l-k8j9-h1g2f3d4s5a7",
    "name": "Cesto de Basura de Acero - HogarStyle",
    "description": "Un producto de alta calidad de la marca HogarStyle. Ideal para tu cocina.",
    "sku": "CBA-999",
    "brand": "HogarStyle",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/z1x2c3v4-b5n6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:58:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 49.99,
        "stock": 80,
        "variantSku": "CBA-999-PLA",
        "imageUrl": "https://picsum.photos/seed/z1x2c3v4-b5n6-plateado/400/400"
      }
    ]
  },
  {
    "id": "q9w8e7r6-t5y4-4u3i-o2p1-a1s2d3f4g5h7",
    "name": "Juego de Bowls de Cerámica - MesaLista",
    "description": "Un producto de alta calidad de la marca MesaLista. Ideal para tu vajilla.",
    "sku": "JBC-222",
    "brand": "MesaLista",
    "category": "Vajilla",
    "mainImageUrl": "https://picsum.photos/seed/q9w8e7r6-t5y4/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T21:59:00Z",
    "variants": [
      {
        "color": "Verde",
        "material": "Cerámica",
        "price": 39.99,
        "stock": 90,
        "variantSku": "JBC-222-VER",
        "imageUrl": "https://picsum.photos/seed/q9w8e7r6-t5y4-verde/400/400"
      },
      {
        "color": "Blanco",
        "material": "Cerámica",
        "price": 38.50,
        "stock": 110,
        "variantSku": "JBC-222-BLA",
        "imageUrl": "https://picsum.photos/seed/q9w8e7r6-t5y4-blanco/400/400"
      }
    ]
  },
  {
    "id": "a1b3c2d4-f6e5-4g7h-8i9j-k1l2m3n4o5p7",
    "name": "Individuales de Eco-cuero - CocinaFácil",
    "description": "Un producto de alta calidad de la marca CocinaFácil. Ideal para tus textiles.",
    "sku": "IEC-404",
    "brand": "CocinaFácil",
    "category": "Textiles",
    "mainImageUrl": "https://picsum.photos/seed/a1b3c2d4-f6e5/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:00:00Z",
    "variants": [
      {
        "color": "Negro",
        "material": "Eco-cuero",
        "price": 9.99,
        "stock": 300,
        "variantSku": "IEC-404-NEG",
        "imageUrl": "https://picsum.photos/seed/a1b3c2d4-f6e5-negro/400/400"
      }
    ]
  },
  {
    "id": "z9x8c7v6-b5n4-4m3l-k2j1-h9g8f7d6s5a5",
    "name": "Rallador Multiuso de Acero - ChefPro",
    "description": "Un producto de alta calidad de la marca ChefPro. Ideal para tu cocina.",
    "sku": "RMA-619",
    "brand": "ChefPro",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/z9x8c7v6-b5n4/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:01:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 18.50,
        "stock": 170,
        "variantSku": "RMA-619-PLA",
        "imageUrl": "https://picsum.photos/seed/z9x8c7v6-b5n4-plateado/400/400"
      }
    ]
  },
  {
    "id": "u7y6t5r4-e3w2-4q1a-s2d3-f4g5h6j7k8l0",
    "name": "Cafetera Italiana de Aluminio - BazarTotal",
    "description": "Un producto de alta calidad de la marca BazarTotal. Ideal para tus accesorios.",
    "sku": "CIA-888",
    "brand": "BazarTotal",
    "category": "Accesorios",
    "mainImageUrl": "https://picsum.photos/seed/u7y6t5r4-e3w2/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:02:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Aluminio",
        "price": 42.00,
        "stock": 85,
        "variantSku": "CIA-888-PLA",
        "imageUrl": "https://picsum.photos/seed/u7y6t5r4-e3w2-plateado/400/400"
      }
    ]
  },
  {
    "id": "m1n2b3v4-c5x6-4z7l-k8j9-h1g2f3d4s5a7",
    "name": "Copas de Vino de Cristal - HogarStyle",
    "description": "Un producto de alta calidad de la marca HogarStyle. Ideal para tu vajilla.",
    "sku": "CVC-731",
    "brand": "HogarStyle",
    "category": "Vajilla",
    "mainImageUrl": "https://picsum.photos/seed/m1n2b3v4-c5x6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:03:00Z",
    "variants": [
      {
        "color": "Transparente",
        "material": "Cristal",
        "price": 59.99,
        "stock": 95,
        "variantSku": "CVC-731-TRA",
        "imageUrl": "https://picsum.photos/seed/m1n2b3v4-c5x6-transparente/400/400"
      }
    ]
  },
  {
    "id": "o1p2i3u4-y5t6-4r7e-w8q9-a1s2d3f4g5h7",
    "name": "Prensa Ajos de Acero - ChefPro",
    "description": "Un producto de alta calidad de la marca ChefPro. Ideal para tu cocina.",
    "sku": "PAA-901",
    "brand": "ChefPro",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/o1p2i3u4-y5t6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:04:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 13.50,
        "stock": 220,
        "variantSku": "PAA-901-PLA",
        "imageUrl": "https://picsum.photos/seed/o1p2i3u4-y5t6-plateado/400/400"
      }
    ]
  },
  {
    "id": "b1n2m3c4-v5x6-4z7l-k8j9-h1g2f3d4s5a8",
    "name": "Panera de Tela - CocinaFácil",
    "description": "Un producto de alta calidad de la marca CocinaFácil. Ideal para tus textiles.",
    "sku": "PDT-202",
    "brand": "CocinaFácil",
    "category": "Textiles",
    "mainImageUrl": "https://picsum.photos/seed/b1n2m3c4-v5x6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:05:00Z",
    "variants": [
      {
        "color": "Beige",
        "material": "Algodón",
        "price": 11.99,
        "stock": 160,
        "variantSku": "PDT-202-BEI",
        "imageUrl": "https://picsum.photos/seed/b1n2m3c4-v5x6-beige/400/400"
      }
    ]
  },
  {
    "id": "k1j2h3g4-f5d6-4s7a-p8o9-i1u2y3t4r5e7",
    "name": "Molinillo de Pimienta de Madera - MesaLista",
    "description": "Un producto de alta calidad de la marca MesaLista. Ideal para tus accesorios.",
    "sku": "MPM-313",
    "brand": "MesaLista",
    "category": "Accesorios",
    "mainImageUrl": "https://picsum.photos/seed/k1j2h3g4-f5d6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:06:00Z",
    "variants": [
      {
        "color": "Madera",
        "material": "Madera",
        "price": 27.00,
        "stock": 80,
        "variantSku": "MPM-313-MAD",
        "imageUrl": "https://picsum.photos/seed/k1j2h3g4-f5d6-madera/400/400"
      }
    ]
  },
  {
    "id": "h1g2f3d4-s5a6-4q7w-e8r9-t1y2u3i4o5p7",
    "name": "Jarra de Vidrio con Tapa - HogarStyle",
    "description": "Un producto de alta calidad de la marca HogarStyle. Ideal para tu vajilla.",
    "sku": "JVT-415",
    "brand": "HogarStyle",
    "category": "Vajilla",
    "mainImageUrl": "https://picsum.photos/seed/h1g2f3d4-s5a6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:07:00Z",
    "variants": [
      {
        "color": "Transparente",
        "material": "Vidrio",
        "price": 24.99,
        "stock": 100,
        "variantSku": "JVT-415-TRA",
        "imageUrl": "https://picsum.photos/seed/h1g2f3d4-s5a6-transparente/400/400"
      }
    ]
  },
  {
    "id": "v1c2x3z4-a5s6-4d7f-g8h9-j1k2l3m4n5b7",
    "name": "Pelapapas de Acero Inoxidable - ChefPro",
    "description": "Un producto de alta calidad de la marca ChefPro. Ideal para tu cocina.",
    "sku": "PAI-808",
    "brand": "ChefPro",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/v1c2x3z4-a5s6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:08:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 9.50,
        "stock": 350,
        "variantSku": "PAI-808-PLA",
        "imageUrl": "https://picsum.photos/seed/v1c2x3z4-a5s6-plateado/400/400"
      }
    ]
  },
  {
    "id": "y1t2r3e4-w5q6-4a7s-d8f9-g1h2j3k4l5m7",
    "name": "Servilletas de Tela de Lino - MesaLista",
    "description": "Un producto de alta calidad de la marca MesaLista. Ideal para tus textiles.",
    "sku": "STL-626",
    "brand": "MesaLista",
    "category": "Textiles",
    "mainImageUrl": "https://picsum.photos/seed/y1t2r3e4-w5q6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:09:00Z",
    "variants": [
      {
        "color": "Blanco",
        "material": "Lino",
        "price": 21.99,
        "stock": 150,
        "variantSku": "STL-626-BLA",
        "imageUrl": "https://picsum.photos/seed/y1t2r3e4-w5q6-blanco/400/400"
      },
      {
        "color": "Gris",
        "material": "Lino",
        "price": 22.50,
        "stock": 130,
        "variantSku": "STL-626-GRI",
        "imageUrl": "https://picsum.photos/seed/y1t2r3e4-w5q6-gris/400/400"
      }
    ]
  },
  {
    "id": "f1g3h2j4-k6l5-4m7n-b8v9-c1x2z3a4s5d7",
    "name": "Porta Rollo de Cocina - BazarTotal",
    "description": "Un producto de alta calidad de la marca BazarTotal. Ideal para tus accesorios.",
    "sku": "PRC-550",
    "brand": "BazarTotal",
    "category": "Accesorios",
    "mainImageUrl": "https://picsum.photos/seed/f1g3h2j4-k6l5/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:10:00Z",
    "variants": [
      {
        "color": "Madera",
        "material": "Madera",
        "price": 16.00,
        "stock": 190,
        "variantSku": "PRC-550-MAD",
        "imageUrl": "https://picsum.photos/seed/f1g3h2j4-k6l5-madera/400/400"
      }
    ]
  },
  {
    "id": "l1k2j3h4-g5f6-4d7s-a8s9-d1f2g3h4j5k8",
    "name": "Lechera de Cerámica - HogarStyle",
    "description": "Un producto de alta calidad de la marca HogarStyle. Ideal para tu vajilla.",
    "sku": "LDC-147",
    "brand": "HogarStyle",
    "category": "Vajilla",
    "mainImageUrl": "https://picsum.photos/seed/l1k2j3h4-g5f6/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:11:00Z",
    "variants": [
      {
        "color": "Blanco",
        "material": "Cerámica",
        "price": 17.99,
        "stock": 80,
        "variantSku": "LDC-147-BLA",
        "imageUrl": "https://picsum.photos/seed/l1k2j3h4-g5f6-blanco/400/400"
      }
    ]
  },
  {
    "id": "p9o8i7u6-y5t4-4r3e-w2q1-a1s2d3f4g5h8",
    "name": "Batidor de Acero Manual - ChefPro",
    "description": "Un producto de alta calidad de la marca ChefPro. Ideal para tu cocina.",
    "sku": "BAM-717",
    "brand": "ChefPro",
    "category": "Cocina",
    "mainImageUrl": "https://picsum.photos/seed/p9o8i7u6-y5t4/400/400",
    "isActive": true,
    "createdAt": "2025-08-27T22:12:00Z",
    "variants": [
      {
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "price": 10.99,
        "stock": 280,
        "variantSku": "BAM-717-PLA",
        "imageUrl": "https://picsum.photos/seed/p9o8i7u6-y5t4-plateado/400/400"
      }
    ]
  }
]

export const syncData = async function (){
    products.forEach(async (e)=>{
        const index = algolia.initIndex("products");
        await index.saveObject(e, {autoGenerateObjectIDIfNotExist: true}).wait()
    })

    return true;
}
// Create a new index and add a record
// const index = client.initIndex("test_index");
// const record = { objectID: 1, name: "test_record" }

// await index.saveObject(record).wait();

// // Search the index for "test" and print the results
// const { hits } = await index.search("test");
// console.log(JSON.stringify(hits[0]));
