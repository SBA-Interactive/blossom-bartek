import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  image?: string;
  date: string;
}

interface ReviewState {
  reviews: Record<string, Review[]>;
  addReview: (productId: string, review: Omit<Review, "id" | "date">) => void;
  getReviews: (productId: string) => Review[];
  getAverageRating: (productId: string) => number;
  getReviewCount: (productId: string) => number;
  getRatingDistribution: (productId: string) => Record<number, number>;
}

export const useReviewStore = create<ReviewState>()(
  persist(
    (set, get) => ({
      reviews: {},

      addReview: (productId, review) => {
        const newReview: Review = {
          ...review,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
        };
        set((state) => ({
          reviews: {
            ...state.reviews,
            [productId]: [...(state.reviews[productId] || []), newReview],
          },
        }));
      },

      getReviews: (productId) => {
        return get().reviews[productId] || [];
      },

      getAverageRating: (productId) => {
        const reviews = get().reviews[productId] || [];
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
        return Math.round((sum / reviews.length) * 10) / 10;
      },

      getReviewCount: (productId) => {
        return (get().reviews[productId] || []).length;
      },

      getRatingDistribution: (productId) => {
        const reviews = get().reviews[productId] || [];
        const dist: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviews.forEach((r) => {
          const rounded = Math.round(r.rating);
          if (dist[rounded] !== undefined) {
            dist[rounded]++;
          }
        });
        return dist;
      },
    }),
    {
      name: "blossom-reviews",
    }
  )
);