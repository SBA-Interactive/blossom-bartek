import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface SectionLoadingProps {
  type?: "default" | "card" | "grid" | "list" | "hero" | "pricing" | "stats" | "testimonials";
  count?: number;
}

export function SectionLoading({ type = "default", count = 1 }: SectionLoadingProps) {
  switch (type) {
    case "card":
      return (
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex gap-4">
            <Skeleton className="h-32 w-32 rounded-lg" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      );
    case "grid":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="rounded-lg border p-4 space-y-3">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-8 w-full" />
            </div>
          ))}
        </div>
      );
    case "list":
      return (
        <div className="space-y-3">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg border">
              <Skeleton className="h-16 w-16 rounded-lg" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      );
    case "hero":
      return (
        <div className="space-y-6 py-16">
          <Skeleton className="h-8 w-32 mx-auto" />
          <Skeleton className="h-16 w-2/3 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
          <div className="flex gap-4 justify-center">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      );
    case "pricing":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="rounded-lg border p-6 space-y-4">
              <Skeleton className="h-12 w-12 rounded-full mx-auto" />
              <Skeleton className="h-6 w-24 mx-auto" />
              <Skeleton className="h-4 w-32 mx-auto" />
              <Skeleton className="h-10 w-20 mx-auto" />
              <div className="space-y-2 pt-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      );
    case "stats":
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="h-10 w-20 mx-auto" />
              <Skeleton className="h-4 w-16 mx-auto" />
            </div>
          ))}
        </div>
      );
    case "testimonials":
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="rounded-lg border p-6 space-y-3">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Skeleton key={j} className="h-4 w-4 rounded-full" />
                ))}
              </div>
              <Skeleton className="h-4 w-1/3" />
            </div>
          ))}
        </div>
      );
    default:
      return (
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      );
  }
}

interface SectionErrorProps {
  onRetry?: () => void;
  showRefresh?: boolean;
}

export function SectionError({ onRetry, showRefresh = true }: SectionErrorProps) {
  const [retried, setRetried] = useState(false);

  const handleRetry = () => {
    setRetried(true);
    onRetry?.();
  };

  if (retried) {
    return (
      <div className="flex flex-col items-center justify-center py-8 gap-3 border border-destructive/20 rounded-lg bg-destructive/5 my-4">
        <div className="flex items-center gap-2 text-destructive">
          <AlertTriangle className="w-5 h-5" />
          <span className="text-sm font-medium">Unexpected error. Refresh page</span>
        </div>
        <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-3 border border-destructive/20 rounded-lg bg-destructive/5 my-4">
      <div className="flex items-center gap-2 text-destructive">
        <AlertTriangle className="w-5 h-5" />
        <span className="text-sm font-medium">Something went wrong</span>
      </div>
      <div className="flex gap-2">
        {onRetry && (
          <Button variant="outline" size="sm" onClick={handleRetry}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        )}
        {showRefresh && (
          <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
        )}
      </div>
    </div>
  );
}

interface SectionWrapperProps {
  loading?: boolean;
  error?: Error | null;
  onRetry?: () => void;
  loadingType?: SectionLoadingProps["type"];
  loadingCount?: number;
  showRefresh?: boolean;
  children: ReactNode;
}

export function SectionWrapper({
  loading = false,
  error = null,
  onRetry,
  loadingType = "default",
  loadingCount = 1,
  showRefresh = true,
  children,
}: SectionWrapperProps) {
  if (loading) {
    return <SectionLoading type={loadingType} count={loadingCount} />;
  }

  if (error) {
    return <SectionError onRetry={onRetry} showRefresh={showRefresh} />;
  }

  return <>{children}</>;
}