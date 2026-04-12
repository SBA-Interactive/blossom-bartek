import { useState, useEffect, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface UseAsyncLoadOptions<T> {
  load: () => T;
  deps?: React.DependencyList;
}

interface UseAsyncLoadReturn<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | null;
  retry: () => void;
}

export function useAsyncLoad<T>(options: UseAsyncLoadOptions<T>): UseAsyncLoadReturn<T> {
  const [state, setState] = useState({
    data: undefined as T | undefined,
    loading: true,
    error: null as Error | null,
    retried: false,
  });

  const load = () => {
    try {
      const result = options.load();
      setState(s => ({ ...s, data: result, loading: false, error: null }));
    } catch (e) {
      setState(s => ({ ...s, loading: false, error: e as Error }));
    }
  };

  useEffect(() => {
    load();
  }, options.deps || []);

  const retry = () => {
    setState(s => ({ ...s, loading: true, error: null }));
    load();
  };

  return { data: state.data, loading: state.loading, error: state.error, retry };
}

export function useAsyncState<T>(initialValue: T) {
  const [state, setState] = useState({
    data: initialValue,
    loading: true,
    error: null as Error | null,
  });

  const setData = (updater: ((prev: T) => T) | T) => {
    setState(s => ({
      ...s,
      data: typeof updater === 'function' ? (updater as (prev: T) => T)(s.data) : updater,
      error: null,
    }));
  };

  const setLoading = (loading: boolean) => setState(s => ({ ...s, loading }));
  const setError = (error: Error | null) => setState(s => ({ ...s, error }));

  return { data: state.data, loading: state.loading, error: state.error, setData, setLoading, setError };
}

interface WrapErrorProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface WrapErrorState {
  hasError: boolean;
  error: Error | null;
}

class WrapError extends React.Component<WrapErrorProps, WrapErrorState> {
  constructor(props: WrapErrorProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): WrapErrorState {
    return { hasError: true, error };
  }

  handleRetry = () => this.setState({ hasError: false, error: null });

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center py-12 gap-3 border border-destructive/20 rounded-lg bg-destructive/5">
          <div className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-medium">Unexpected error. Refresh page</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={this.handleRetry}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export const WrapErrorBoundary = WrapError;

export function WrapLoading({ loading, fallback, children }: { loading: boolean; fallback?: ReactNode; children: ReactNode }) {
  if (loading) {
    return fallback || (
      <div className="rounded-lg border p-6 space-y-4 animate-pulse">
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
  return <>{children}</>;
}