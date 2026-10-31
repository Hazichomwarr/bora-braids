export type ProductCategory = "Hair Extensions" | "Hair Care" | "Accessories";
export type DemoProduct = { id: string; name: string; category: ProductCategory; description: string; price: number; image: string };
export const productCategories: Array<"All" | ProductCategory> = ["All", "Hair Extensions", "Hair Care", "Accessories"];
export const products: DemoProduct[] = [
  { id: "silk-wave", name: "Silk Wave Bundles", category: "Hair Extensions", description: "A soft, flowing texture for an elevated look.", price: 145, image: "/images/discover-demo-hero.png" },
  { id: "signature-oil", name: "Signature Hair Oil", category: "Hair Care", description: "A lightweight ritual for softness and shine.", price: 28, image: "/images/luxury-hair-demo.png" },
  { id: "edge-ritual", name: "Edge Ritual", category: "Hair Care", description: "A refined finishing essential for polished details.", price: 24, image: "/images/luxury-hair-demo.png" },
  { id: "braid-cuff", name: "Golden Braid Cuffs", category: "Accessories", description: "A subtle finishing touch with warm-gold character.", price: 18, image: "/images/discover-demo-hero.png" },
  { id: "deep-wave", name: "Deep Wave Bundles", category: "Hair Extensions", description: "Rich, dimensional waves with a natural movement.", price: 165, image: "/images/discover-demo-hero.png" },
  { id: "satin-wrap", name: "Satin Sleep Wrap", category: "Accessories", description: "A soft nightly essential for your beauty ritual.", price: 22, image: "/images/luxury-hair-demo.png" },
];
