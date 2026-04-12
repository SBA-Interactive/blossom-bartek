import type { SubscriptionTier } from "@/store/useSubscriptionStore";

export const SUBSCRIPTION_TIERS: Record<SubscriptionTier, { monthlyPrice: number; yearlyPrice: number; discount: number }> = {
  free: { monthlyPrice: 0, yearlyPrice: 0, discount: 0 },
  starter: { monthlyPrice: 9.99, yearlyPrice: 99, discount: 5 },
  premium: { monthlyPrice: 19.99, yearlyPrice: 199, discount: 10 },
  vip: { monthlyPrice: 39.99, yearlyPrice: 399, discount: 20 },
};

export const SUBSCRIPTION_TIER_NAMES = ["free", "starter", "premium", "vip"] as const;
export type SubscriptionTierName = typeof SUBSCRIPTION_TIER_NAMES[number];