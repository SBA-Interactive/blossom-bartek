import { products } from "./products";

export interface BottleOption {
  id: string;
  name: string;
  image: string;
}

export interface SizeOption {
  id: string;
  name: string;
}

export interface PackagingOption {
  id: string;
  name: string;
  image: string;
}

export const BOTTLE_OPTIONS: BottleOption[] = [
  { id: 'citrus-bloom', name: 'Citrus Bloom', image: '/perfume_citrus_bloom_medium.webp' },
  { id: 'berry-mist', name: 'Berry Mist', image: '/perfume_berry_mist_big.webp' },
  { id: 'garden-peel', name: 'Garden Peel', image: '/perfume_garden_peel.webp' },
  { id: 'tropical-sun', name: 'Tropical Sun', image: '/perfume_tropical_sun_medium.webp' },
  { id: 'forest-dew', name: 'Forest Dew', image: '/perfume_forest_dew_big.webp' },
  { id: 'rose-petal', name: 'Rose Petal', image: '/perfume_rose_petal_small.webp' },
];

export const SIZE_OPTIONS: SizeOption[] = [
  { id: '30ml', name: '30ml' },
  { id: '50ml', name: '50ml' },
  { id: '100ml', name: '100ml' },
];

const splitNotes = (notes: string[]) => {
  const allNotes = notes.flatMap(n => n.split(',').map(s => s.trim()));
  return [...new Set(allNotes)];
};

export const SCENT_OPTIONS = {
  top: splitNotes(products.map(p => p.notes.top)),
  heart: splitNotes(products.map(p => p.notes.heart)),
  base: splitNotes(products.map(p => p.notes.base)),
};

export const PACKAGING_OPTIONS: PackagingOption[] = [
  { id: 'standard', name: 'Standard Box', image: '/box_transparent.webp' },
  { id: 'gift', name: 'Gift Wrapped', image: '/box-gift-transparent.webp' },
  { id: 'birthday', name: 'Birthday Box', image: '/box-wrapped-transparent.webp' },
  { id: 'luxury', name: 'Luxury Velvet Pouch', image: '/box-velvet-transparent.webp' },
];
