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
  { id: 'citrus-bloom', name: 'Citrus Bloom', image: '/perfume_citrus_bloom_medium.png' },
  { id: 'berry-mist', name: 'Berry Mist', image: '/perfume_berry_mist_big.png' },
  { id: 'garden-peel', name: 'Garden Peel', image: '/perfume_garden_peel.png' },
  { id: 'tropical-sun', name: 'Tropical Sun', image: '/perfume_tropical_sun_medium.png' },
  { id: 'forest-dew', name: 'Forest Dew', image: '/perfume_forest_dew_big.png' },
  { id: 'rose-petal', name: 'Rose Petal', image: '/perfume_rose_petal_small.png' },
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
  { id: 'standard', name: 'Standard Box', image: '/images/packaging_standard.png' },
  { id: 'gift', name: 'Gift Wrapped', image: '/images/packaging_gift.png' },
  { id: 'birthday', name: 'Birthday Box', image: '/images/packaging_birthday.png' },
  { id: 'luxury', name: 'Luxury Velvet Pouch', image: '/images/packaging_luxury.png' },
];
