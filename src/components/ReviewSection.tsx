import { useState, useMemo, useCallback } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useAuthStore } from "@/store/useAuthStore";
import { useReviewStore } from "@/store/useReviewStore";
import { SectionWrapper } from "@/components/section-wrapper";

interface ReviewSectionProps {
  productId: string;
}

const RATING_LABELS: Record<number, string> = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};

function StarRatingInput({
  rating,
  onChange,
}: {
  rating: number;
  onChange: (r: number) => void;
}) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (star: number) => {
    if (rating === star) {
      onChange(star - 0.5);
    } else {
      onChange(star);
    }
  };

  const renderStar = (star: number) => {
    const current = hoverRating || rating;
    const isFull = star <= current;
    const isHalf = !isFull && star - 0.5 <= current;

    return (
      <button
        key={star}
        type="button"
        className="focus:outline-none p-0.5"
        onClick={() => handleClick(star)}
        onMouseEnter={() => setHoverRating(star)}
        onMouseLeave={() => setHoverRating(0)}
      >
        {isFull ? (
          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
        ) : isHalf ? (
          <div className="relative w-6 h-6">
            <Star className="absolute inset-0 w-6 h-6 text-muted-foreground" />
            <div className="absolute inset-0 w-3 overflow-hidden">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        ) : (
          <Star className="w-6 h-6 text-muted-foreground" />
        )}
      </button>
    );
  };

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(renderStar)}
      {rating > 0 && (
        <span className="ml-2 text-sm text-muted-foreground">
          {RATING_LABELS[Math.round(rating)]}
        </span>
      )}
    </div>
  );
}

function StarDisplay({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground"
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
      <span className="text-sm text-muted-foreground">({count})</span>
    </div>
  );
}

function RatingHistogram({
  distribution,
  total,
}: {
  distribution: Record<number, number>;
  total: number;
}) {
  return (
    <div className="space-y-1">
      {[5, 4, 3, 2, 1].map((star) => {
        const count = distribution[star] || 0;
        const percentage = total > 0 ? (count / total) * 100 : 0;
        return (
          <div key={star} className="flex items-center gap-2 text-sm">
            <span className="w-3">{star}</span>
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="w-6 text-right text-muted-foreground">{count}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function ReviewSection({ productId }: ReviewSectionProps) {
  const { user, isAuthenticated } = useAuthStore();
  const { getReviews, getAverageRating, getReviewCount, getRatingDistribution, addReview } =
    useReviewStore();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reviews = useMemo(() => getReviews(productId), [productId, getReviews]);
  const averageRating = useMemo(() => getAverageRating(productId), [productId, getAverageRating]);
  const reviewCount = useMemo(() => getReviewCount(productId), [productId, getReviewCount]);
  const distribution = useMemo(() => getRatingDistribution(productId), [productId, getRatingDistribution]);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/webp"];
    const maxSize = 4 * 1024 * 1024;

    if (!validTypes.includes(file.type)) {
      alert("Only JPG and WebP images are allowed.");
      return;
    }

    if (file.size > maxSize) {
      alert("Image must be under 4MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!user || rating === 0 || !comment.trim()) return;

    setIsSubmitting(true);
    addReview(productId, {
      userId: user.id,
      userName: user.name,
      rating,
      comment: comment.trim(),
      image: image || undefined,
    });

    setRating(0);
    setComment("");
    setImage(null);
    setIsSubmitting(false);
  }, [user, rating, comment, image, productId, addReview]);

  return (
    <section aria-labelledby="reviews-heading" className="mt-16">
      <h2
        id="reviews-heading"
        className="text-2xl font-heading font-bold mb-6 flex items-center gap-3"
      >
        Reviews
      </h2>

      <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-8">
        <div>
          <div className="text-4xl font-bold text-primary">{averageRating.toFixed(1)}</div>
          <StarDisplay rating={averageRating} count={reviewCount} />
          <div className="mt-4">
            <RatingHistogram distribution={distribution} total={reviewCount} />
          </div>
        </div>

        {isAuthenticated && user ? (
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Rating</label>
                  <StarRatingInput rating={rating} onChange={setRating} />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Your Review</label>
                  <Textarea
                    placeholder="Share your experience with this product..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Add Photo (optional)</label>
                  <input
                    type="file"
                    accept="image/jpeg,image/webp"
                    onChange={handleImageUpload}
                    className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  {image && (
                    <div className="mt-2 relative inline-block">
                      <img src={image} alt="Preview" className="w-20 h-20 object-cover rounded" />
                      <button
                        type="button"
                        onClick={() => setImage(null)}
                        className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={rating === 0 || !comment.trim() || isSubmitting}
                >
                  Submit Review
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-4 text-center text-muted-foreground">
              Please{" "}
              <a href="/login" className="text-primary hover:underline">
                sign in
              </a>{" "}
              to leave a review.
            </CardContent>
          </Card>
        )}
      </div>

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No reviews yet. Be the first to review this product!
          </p>
        ) : (
          reviews
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="font-medium">{review.userName}</span>
                      <StarDisplay rating={review.rating} count={0} />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                  {review.image && (
                    <img
                      src={review.image}
                      alt="Review"
                      className="mt-3 w-24 h-24 object-cover rounded"
                    />
                  )}
                </CardContent>
              </Card>
            ))
        )}
      </div>
    </section>
  );
}