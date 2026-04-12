import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface AsyncBoundaryProps {
  loading: boolean;
  error: Error | null;
  onRetry?: () => void;
  loadingFallback?: React.ReactNode;
  children: React.ReactNode;
}

export function AsyncBoundary({
  loading,
  error,
  onRetry,
  loadingFallback,
  children,
}: AsyncBoundaryProps) {
  const [hasRetried, setHasRetried] = useState(false);
  const [wasSuccessful, setWasSuccessful] = useState(false);

  useEffect(() => {
    if (!loading && !error) {
      setWasSuccessful(true);
    }
  }, [loading, error]);

  useEffect(() => {
    if (loading) {
      setHasRetried(false);
    }
  }, [loading]);

  if (loading) {
    if (loadingFallback) {
      return <>{loadingFallback}</>;
    }
    return (
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    );
  }

  if (error) {
    if (!hasRetried && onRetry) {
      return (
        <div className="flex flex-col items-center justify-center py-8 gap-4">
          <div className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm">Something went wrong</span>
          </div>
          <Button variant="outline" size="sm" onClick={() => {
            setHasRetried(true);
            onRetry();
          }}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <div className="flex items-center gap-2 text-destructive">
          <AlertTriangle className="w-5 h-5" />
          <span className="text-sm">Unexpected error. Refresh page</span>
        </div>
        <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}