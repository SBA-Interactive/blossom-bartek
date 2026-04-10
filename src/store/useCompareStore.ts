import { create } from "zustand";
import { getProductById, Product } from "@/constants/products";

interface CompareItem {
  id: string;
  productId: string;
  product: Product;
  addedAt: Date;
}

interface CompareState {
  items: CompareItem[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
}

export const useCompareStore = create<CompareState>((set, get) => ({
  items: [],

  addItem: (productId: string) => {
    const product = getProductById(productId);
    if (!product || get().isInCompare(productId) || get().items.length >= 4) return;

    set((state) => ({
      items: [
        ...state.items,
        {
          id: crypto.randomUUID(),
          productId: product.id,
          product,
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

  isInCompare: (productId: string) => {
    return get().items.some((item) => item.productId === productId);
  },

  clearCompare: () => {
    set({ items: [] });
  },
}));
