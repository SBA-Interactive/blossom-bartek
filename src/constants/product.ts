export const MAX_QUANTITY = 50;
export const DEFAULT_STOCK = 100;

export interface BottleSize {
  id: string;
  label: string;
  ml: number;
  multiplier: number;
}

export const BOTTLE_SIZES: BottleSize[] = [
  { id: "30ml", label: "30ml", ml: 30, multiplier: 1 },
  { id: "60ml", label: "60ml", ml: 60, multiplier: 2 },
  { id: "100ml", label: "100ml", ml: 100, multiplier: 3 },
];

export function getBottleSizeById(id: string): BottleSize | undefined {
  return BOTTLE_SIZES.find((b) => b.id === id);
}

export interface ScentNote {
  id: string;
  name: string;
  category: "top" | "heart" | "base";
  description: string;
}

export const SCENT_NOTES: ScentNote[] = [
  { id: "orange", name: "Orange", category: "top", description: "Fresh citrus burst" },
  { id: "lemon", name: "Lemon", category: "top", description: "Zesty and bright" },
  { id: "grapefruit", name: "Grapefruit", category: "top", description: "Tangy and invigorating" },
  { id: "lime", name: "Lime", category: "top", description: "Fresh green citrus" },
  { id: "bergamot", name: "Bergamot", category: "top", description: "Sweet citrus notes" },
  { id: "raspberry", name: "Raspberry", category: "top", description: "Sweet berry aroma" },
  { id: "blackberry", name: "Blackberry", category: "top", description: "Deep berry sweetness" },
  { id: "pineapple", name: "Pineapple", category: "top", description: "Tropical sweet start" },
  { id: "mint", name: "Mint", category: "heart", description: "Cool and refreshing" },
  { id: "eucalyptus", name: "Eucalyptus", category: "heart", description: "Fresh and clearing" },
  { id: "jasmine", name: "Jasmine", category: "heart", description: "Floral romantic" },
  { id: "neroli", name: "Neroli", category: "heart", description: "Orange blossom" },
  { id: "rose", name: "Rose", category: "heart", description: "Classic floral" },
  { id: "peony", name: "Peony", category: "heart", description: "Fresh floral" },
  { id: "coconut", name: "Coconut", category: "heart", description: "Creamy tropical" },
  { id: "frangipani", name: "Frangipani", category: "heart", description: "Exotic floral" },
  { id: "basil", name: "Basil", category: "heart", description: "Herbal and green" },
  { id: "thyme", name: "Thyme", category: "heart", description: "Earthy herb" },
  { id: "green-tea", name: "Green Tea", category: "heart", description: "Fresh and clean" },
  { id: "white-musks", name: "White Musks", category: "base", description: "Soft clean base" },
  { id: "cedar", name: "Cedar", category: "base", description: "Warm woody" },
  { id: "vetiver", name: "Vetiver", category: "base", description: "Earthy grounding" },
  { id: "oakmoss", name: "Oakmoss", category: "base", description: "Forest floor" },
  { id: "vanilla", name: "Vanilla", category: "base", description: "Warm sweet" },
  { id: "sandalwood", name: "Sandalwood", category: "base", description: "Creamy wood" },
  { id: "amber", name: "Amber", category: "base", description: "Warm resin" },
  { id: "white-woods", name: "White Woods", category: "base", description: "Clean modern" },
];

export function getScentNotesByCategory(category: ScentNote["category"]): ScentNote[] {
  return SCENT_NOTES.filter((s) => s.category === category);
}
