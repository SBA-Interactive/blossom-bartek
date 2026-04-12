import { useState, useEffect, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface SectionState {
  loading: boolean;
  error: Error | null;
  retried: boolean;
  hasLoadedSuccessfully: boolean;
}

interface UseSectionLoadOptions<T> {
  loadFn: () => T;
  deps?: React.DependencyList;
}

interface UseSectionLoadReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useSectionLoad<T>(options: UseSectionLoadOptions<T>): UseSectionLoadReturn<T> {
  const [state, setState] = useState<SectionState>({
    loading: true,
    error: null,
    retried: false,
    hasLoadedSuccessfully: false,
  });

  const [data, setData] = useState<T | null>(null);

  const load = () => {
    try {
      const result = options.loadFn();
      setData(result);
      setState(s => ({ ...s, loading: false, error: null, hasLoadedSuccessfully: true }));
    } catch (err) {
      setState(s => ({ ...s, loading: false, error: err as Error }));
    }
  };

  useEffect(() => {
    load();
  }, options.deps || []);

  const refetch = () => {
    setState(s => ({ ...s, loading: true, retried: s.hasLoadedSuccessfully ? false : s.retried }));
    load();
  };

  return {
    data,
    loading: state.loading,
    error: state.error,
    refetch,
  };
}

interface SectionBoundaryProps {
  loading?: boolean;
  error?: Error | null;
  onRetry?: () => void;
  loadingFallback?: ReactNode;
  children: ReactNode;
}

export function SectionBoundary({ loading = false, error = null, onRetry, loadingFallback, children }: SectionBoundaryProps) {
  const [retried, setRetried] = useState(false);
  const [hasLoadedSuccessfully, setHasLoadedSuccessfully] = useState(false);

  useEffect(() => {
    if (!loading && !error) {
      setHasLoadedSuccessfully(true);
    }
  }, [loading, error]);

  useEffect(() => {
    if (loading) {
      setRetried(false);
    }
  }, [loading]);

  if (loading) {
    if (loadingFallback) return <>{loadingFallback}</>;
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
  }

  if (error) {
    if (!retried && onRetry) {
      return (
        <div className="flex flex-col items-center justify-center py-12 gap-3 border border-destructive/20 rounded-lg bg-destructive/5">
          <div className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-medium">Something went wrong</span>
          </div>
          <Button variant="outline" size="sm" onClick={() => { setRetried(true); onRetry(); }}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3 border border-destructive/20 rounded-lg bg-destructive/5">
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

  return <>{children}</>;
}

export function SectionLoadingFallback({ height = "h-64" }: { height?: string }) {
  return (
    <div className={`${height} rounded-lg border p-6 space-y-4`}>
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
}