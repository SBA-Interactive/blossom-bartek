import { create } from "zustand";
import { getProductById } from "@/constants/products";
import { MAX_QUANTITY_CART } from "@/constants/filters";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  customBlend?: {
    topNotes: { id: string; name: string }[];
    heartNotes: { id: string; name: string }[];
    baseNotes: { id: string; name: string }[];
  };
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (productId: string, quantity?: number) => void;
  addCustomItem: (name: string, price: number, size: string, customBlend: CartItem["customBlend"]) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  toggleCart: (isOpen?: boolean) => void;
}

interface CartItemInput {
  productId: string;
  quantity?: number;
  name?: string;
  price?: number;
  size?: string;
  customBlend?: CartItem["customBlend"];
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
              ? { ...item, quantity: Math.min(item.quantity + quantity, MAX_QUANTITY_CART) }
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

  addCustomItem: (name: string, price: number, size: string, customBlend: CartItem["customBlend"]) => {
    const productId = `custom-${Date.now()}`;
    
    set((state) => ({
      items: [
        ...state.items,
        {
          id: crypto.randomUUID(),
          productId,
          name,
          price,
          quantity: 1,
          image: "/perfume.png",
          size,
          customBlend,
        },
      ],
      isOpen: true,
    }));
  },

  removeItem: (productId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    }));
  },

  updateQuantity: (productId: string, quantity: number) => {
    if (quantity < 1 || quantity > MAX_QUANTITY_CART) return;

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
