import { create } from "zustand";
import { getProductById } from "@/constants/products";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  toggleCart: (isOpen?: boolean) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (productId: string, quantity = 1) => {
    const product = getProductById(productId);
    if (!product) return;

    set((state) => {
      const existingItem = state.items.find((item) => item.productId === productId);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: Math.min(item.quantity + quantity, 10) }
              : item,
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            id: crypto.randomUUID(),
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity,
            image: product.image,
            size: product.size,
          },
        ],
        isOpen: true,
      };
    });
  },

  removeItem: (productId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    }));
  },

  updateQuantity: (productId: string, quantity: number) => {
    if (quantity < 1 || quantity > 10) return;

    set((state) => ({
      items: state.items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  toggleCart: (isOpen?: boolean) => {
    set((state) => ({
      isOpen: isOpen ?? !state.isOpen,
    }));
  },
}));
