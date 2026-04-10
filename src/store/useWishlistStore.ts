import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProductById } from "@/constants/products";

interface WishlistItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  addedAt: Date;
}

interface WishlistState {
  items: WishlistItem[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist((set, get) => ({
  items: [],

  addItem: (productId: string) => {
    const product = getProductById(productId);
    if (!product || get().isInWishlist(productId)) return;

    set((state) => ({
      items: [
        ...state.items,
        {
          id: crypto.randomUUID(),
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          addedAt: new Date(),
        },
      ],
    }));
  },

  removeItem: (productId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    }));
  },

  isInWishlist: (productId: string) => {
    return get().items.some((item) => item.productId === productId);
  },

  clearWishlist: () => {
    set({ items: [] });
  },
})),
  {
    name: "blossom-wishlist",
  }
);
