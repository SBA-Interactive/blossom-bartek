import { create } from "zustand";
import { persist } from "zustand/middleware";
const useReviewStore = create()(persist((set, get) => ({
  reviews: {},
  addReview: (productId, review) => {
    const newReview = {
      ...review,
      id: crypto.randomUUID(),
      date: (/* @__PURE__ */ new Date()).toISOString()
    };
    set((state) => ({
      reviews: {
        ...state.reviews,
        [productId]: [...state.reviews[productId] || [], newReview]
      }
    }));
  },
  getReviews: (productId) => {
    return get().reviews[productId] || [];
  },
  getAverageRating: (productId) => {
    const reviews = get().reviews[productId] || [];
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return Math.round(sum / reviews.length * 10) / 10;
  },
  getReviewCount: (productId) => {
    return (get().reviews[productId] || []).length;
  },
  getRatingDistribution: (productId) => {
    const reviews = get().reviews[productId] || [];
    const dist = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    };
    reviews.forEach((r) => {
      const rounded = Math.round(r.rating);
      if (dist[rounded] !== void 0) {
        dist[rounded]++;
      }
    });
    return dist;
  }
}), {
  name: "blossom-reviews"
}));
export {
  useReviewStore as u
};
