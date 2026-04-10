export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  badge: string;
  size: string;
  certificates: string[];
  howToUse: string;
  ingredients: string;
  storage: string;
  lifespan: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: "citrus-bloom",
    name: "Citrus Bloom",
    description:
      "Fresh orange and lemon peel essence with a hint of jasmine. Perfect for daily wear.",
    longDescription:
      "Citrus Bloom captures the vibrant energy of sun-ripened oranges and lemons, blended with the delicate sweetness of jasmine petals.\n\n## The Story\nThis uplifting fragrance starts with bright citrus top notes that gradually soften into a warm, floral heart. Perfect for those who love fresh, energizing scents that last throughout the day.\n\n**Best for:** Daily wear, office, casual outings\n\n## Craftsmanship\nEach bottle represents our commitment to sustainability - crafted from upcycled fruit peels that would otherwise go to waste. The result is a fragrance that not only smells divine but also helps protect our planet.",
    price: 45,
    image: "/perfume.png",
    category: "Citrus",
    notes: { top: "Orange, Lemon", heart: "Jasmine, Neroli", base: "White Musk, Cedar" },
    badge: "Bestseller",
    size: "30ml",
    certificates: ["Eco Certified", "Natural Origin", "Vegan"],
    howToUse:
      "Apply 2-3 sprays on pulse points (wrists, neck, behind ears). For best longevity, apply to moisturized skin.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Citrus Limon (Lemon) Peel Extract, Citrus Aurantium Dulcis (Orange) Peel Extract, Jasminum Officinale (Jasmine) Flower Extract, Limonene, Linalool, Citral.",
    storage:
      "Store in a cool, dry place away from direct sunlight. Keep bottle tightly closed when not in use.",
    lifespan:
      "24 months from opening. Best used within 12 months of opening for optimal scent quality.",
    stock: 50,
  },
  {
    id: "berry-mist",
    name: "Berry Mist",
    description: "Delicate berry undertones with a refreshing mist finish. Light and airy.",
    longDescription:
      "Berry Mist is a playful, youthful fragrance that combines the sweetness of wild berries with refreshing mint and green tea.\n\n## The Story\nThis light, airy scent evokes a morning walk through a berry garden, with dewdrops still clinging to the leaves. Ideal for those who prefer subtle, fresh fragrances.\n\n**Best for:** Everyday wear, gym, fresh mornings\n\n## Key Features\nThe combination of raspberry and blackberry creates a naturally sweet opening, while green tea adds a refreshing twist that keeps the fragrance feeling clean and energizing.",
    price: 42,
    image: "/perfume.png",
    category: "Berry",
    notes: { top: "Raspberry, Blackberry", heart: "Mint, Green Tea", base: "White Woods, Musk" },
    badge: "New",
    size: "30ml",
    certificates: ["Natural Origin", "Cruelty-Free", "Vegan"],
    howToUse:
      "Hold bottle 15cm from skin and spray lightly. Focus on clothing or pulse points for a subtle, lasting effect.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Rubus Idaeus (Raspberry) Fruit Extract, Mentha Piperita (Peppermint) Leaf Extract, Camellia Sinensis Leaf Extract, Glycerin, Limonene.",
    storage:
      "Keep in a dark, cool environment. Avoid extreme temperature changes that can alter the scent.",
    lifespan: "18 months sealed, 12 months after opening. Store upright to prevent leakage.",
    stock: 30,
  },
  {
    id: "garden-peel",
    name: "Garden Peel",
    description: "Herbal blend with grapefruit and botanical extracts. Earthy and grounding.",
    longDescription:
      "Garden Peel brings the outdoors in with its herbaceous blend of grapefruit, fresh basil, and aromatic thyme.\n\n## The Story\nThis grounding fragrance connects you to nature, evoking a sun-warmed herb garden. The earthy base notes provide depth and longevity, making it perfect for those who appreciate sophisticated, botanical scents.\n\n**Best for:** Nature lovers, outdoor activities, grounding rituals\n\n## Sustainable Sourcing\nWe partner with local herb farms to source our basil and thyme, ensuring each bottle supports local agriculture while delivering an authentic botanical experience.",
    price: 48,
    image: "/perfume.png",
    category: "Herbal",
    notes: { top: "Grapefruit, Bergamot", heart: "Basil, Thyme", base: "Vetiver, Oakmoss" },
    badge: "Popular",
    size: "30ml",
    certificates: ["Eco Certified", "ISO Certified", "Natural Origin"],
    howToUse:
      "Spray on clean skin after showering. The warmth of your body helps activate the botanical notes.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Citrus Grandis (Grapefruit) Peel Oil, Ocimum Basilicum (Basil) Leaf Oil, Thymus Vulgaris (Thyme) Oil, Vetiveria Zizanoides Root Oil, Limonene, Linalool.",
    storage: "Best stored at room temperature. Avoid bathroom storage due to humidity.",
    lifespan:
      "36 months unopened, 18 months after first use. Natural ingredients may settle - shake gently before use.",
    stock: 25,
  },
  {
    id: "tropical-sun",
    name: "Tropical Sun",
    description: "Warm coconut and pineapple notes with a citrus twist. Summer in a bottle.",
    longDescription:
      "Tropical Sun transports you to a beachside paradise with its warm coconut and sweet pineapple notes, brightened by a zesty lime twist.\n\n## The Story\nThis vacation-in-a-bottle fragrance captures the essence of endless summer days. The creamy base notes add warmth and sensuality, perfect for those who dream of tropical escapes.\n\n**Best for:** Beach days, vacation, special occasions\n\n## Island Inspiration\nInspired by Greek island getaways, this fragrance uses exotic fruits and warm spices to create an intoxicating blend that feels like sunshine bottled.",
    price: 50,
    image: "/perfume.png",
    category: "Tropical",
    notes: { top: "Pineapple, Lime", heart: "Coconut, Frangipani", base: "Vanilla, Sandalwood" },
    badge: "Limited",
    size: "30ml",
    certificates: ["Vegan", "Cruelty-Free"],
    howToUse:
      "Perfect for special occasions. Apply to wrists, neck, and clothes for all-day tropical vibes.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Ananas Sativus (Pineapple) Fruit Extract, Cocos Nucifera (Coconut) Fruit Extract, Citrus Aurantifolia (Lime) Oil, Vanilla Planifolia Fruit Extract, Limonene, Coumarin.",
    storage: "Keep away from heat sources. The tropical oils are sensitive to temperature changes.",
    lifespan:
      "24 months sealed. Best used within 6 months of opening to experience full tropical notes.",
    stock: 15,
  },
  {
    id: "forest-dew",
    name: "Forest Dew",
    description: "Fresh forest-inspired scent with pine and eucalyptus. Invigorating and clean.",
    longDescription:
      "Forest Dew captures the crisp, invigorating air of a pine forest after rain. With refreshing eucalyptus and cool mint top notes, this fragrance awakens the senses and clears the mind.\n\n## The Story\nThe woody base of pine and cedar provides a grounding, calming effect. Perfect for nature lovers and those who enjoy clean, green scents.\n\n**Best for:** Morning routine, post-workout, mindfulness\n\n## Forest Fresh\nOur most eco-conscious fragrance, Forest Dew uses essential oils from sustainably managed forests to create a truly nature-inspired experience.",
    price: 46,
    image: "/perfume.png",
    category: "Fresh",
    notes: { top: "Eucalyptus, Mint", heart: "Pine, Fir Needle", base: "Cedarwood, Amber" },
    badge: "Eco",
    size: "30ml",
    certificates: ["Eco Certified", "Natural Origin", "Vegan", "Cruelty-Free"],
    howToUse:
      "Ideal for morning routine. Spray on after exercise or shower for an energizing boost.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Eucalyptus Globulus Leaf Oil, Mentha Piperita (Peppermint) Oil, Pinus Sylvestris (Pine) Needle Oil, Cedrus Atlantica (Cedarwood) Bark Oil, Limonene.",
    storage: "Store upright in a cool place. The natural oils may cloud slightly - this is normal.",
    lifespan: "30 months sealed, 12 months after opening. Natural scent may fade over time.",
    stock: 40,
  },
  {
    id: "rose-petal",
    name: "Rose Petal",
    description: "Romantic rose water with subtle fruit undertones. Elegant and timeless.",
    longDescription:
      "Rose Petal is an ode to timeless elegance, featuring delicate rose water blended with soft peach and warm vanilla.\n\n## The Story\nThis romantic fragrance captures the essence of a rose garden at dawn, with dewy petals releasing their intoxicating scent. Sophisticated and feminine, it's perfect for special occasions or everyday luxury.\n\n**Best for:** Date nights, special occasions, elegant evenings\n\n## Premium Ingredients\nWe use real damask roses in our formula, harvested at dawn when their scent is most potent, creating a truly luxurious fragrance experience.",
    price: 52,
    image: "/perfume.png",
    category: "Floral",
    notes: { top: "Rose Water, Peach", heart: "Damask Rose, Peony", base: "Vanilla, Musk" },
    badge: "Premium",
    size: "30ml",
    certificates: ["ISO Certified", "Natural Origin"],
    howToUse: "Apply to pulse points. Layer with matching body products for enhanced longevity.",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Rosa Damascena (Rose) Flower Water, Prunus Persica (Peach) Fruit Extract, Rosa Damascena (Rose) Flower Oil, Benzyl Alcohol, Citronellol, Geraniol.",
    storage:
      "Premium formula requires careful storage. Keep away from direct sunlight and heat sources.",
    lifespan:
      "48 months sealed, 24 months after opening. Store in original packaging for best preservation.",
    stock: 10,
  },
];

export const categories = ["All", "Citrus", "Berry", "Herbal", "Tropical", "Fresh", "Floral"];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getSimilarProducts(productId: string, limit: number = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return [];

  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}
