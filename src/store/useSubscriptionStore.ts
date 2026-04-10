import { create } from "zustand";

export type SubscriptionTier = "free" | "starter" | "premium" | "vip";
export type BillingCycle = "monthly" | "yearly";

export interface SubscriptionPlan {
  id: SubscriptionTier;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  discount: number;
  freeShipping: boolean;
  description: string;
  features: string[];
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    discount: 0,
    freeShipping: false,
    description: "Browse and shop with no commitments",
    features: [
      "Standard pricing",
      "Access to all products",
      "Wishlist",
      "Compare products",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 9.99,
    yearlyPrice: 99,
    discount: 5,
    freeShipping: false,
    description: "Perfect for casual shoppers",
    features: [
      "5% discount on all orders",
      "Access to all products",
      "Wishlist",
      "Compare products",
      "Early access to new products",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: 19.99,
    yearlyPrice: 199,
    discount: 10,
    freeShipping: true,
    description: "Best for regular shoppers",
    features: [
      "10% discount on all orders",
      "Free shipping on all orders",
      "Access to all products",
      "Wishlist",
      "Compare products",
      "Early access to new products",
      "Exclusive member deals",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    monthlyPrice: 39.99,
    yearlyPrice: 399,
    discount: 20,
    freeShipping: true,
    description: "For the most dedicated fans",
    features: [
      "20% discount on all orders",
      "Free shipping on all orders",
      "Priority customer support",
      "Access to all products",
      "Wishlist",
      "Compare products",
      "Early access to new products",
      "Exclusive member deals",
      "VIP-only products",
      "Free birthday gift",
    ],
  },
];

export interface SubscriptionState {
  currentTier: SubscriptionTier;
  billingCycle: BillingCycle;
  setTier: (tier: SubscriptionTier) => void;
  setBillingCycle: (cycle: BillingCycle) => void;
  getCurrentPlan: () => SubscriptionPlan;
  getDiscount: () => number;
  hasFreeShipping: () => boolean;
  applyDiscount: (price: number) => number;
  cancelSubscription: () => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set, get) => ({
  currentTier: "free",
  billingCycle: "monthly",

  setTier: (tier: SubscriptionTier) => {
    set({ currentTier: tier });
  },

  setBillingCycle: (cycle: BillingCycle) => {
    set({ billingCycle: cycle });
  },

  getCurrentPlan: () => {
    const { currentTier } = get();
    return SUBSCRIPTION_PLANS.find((p) => p.id === currentTier) || SUBSCRIPTION_PLANS[0];
  },

  getDiscount: () => {
    return get().getCurrentPlan().discount;
  },

  hasFreeShipping: () => {
    return get().getCurrentPlan().freeShipping;
  },

  applyDiscount: (price: number) => {
    const discount = get().getDiscount();
    return price - price * (discount / 100);
  },

  cancelSubscription: () => {
    set({ currentTier: "free" });
  },
}));