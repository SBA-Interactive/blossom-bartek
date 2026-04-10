export const BADGE_COLOR = {
  NEW: { bg: "bg-lime-700", txt: "font-extrabold text-white" },
  HOT: { bg: "bg-orange-300", txt: "font-extrabold text-red-600" },
  ECO: { bg: "bg-amber-800", txt: "font-extrabold text-lime-300" },
  DISCOUNT: { bg: "bg-yellow-500", txt: "font-extrabold text-black" },
  SALE: { bg: "bg-purple-500", txt: "font-extrabold text-white" },
} as const;
export type BadgeType = keyof typeof BADGE_COLOR;
