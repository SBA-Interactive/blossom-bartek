import { useState, useEffect, useCallback, useRef } from "react";

interface UseAsyncDataOptions<T> {
  fetchFn: () => T;
  deps?: React.DependencyList[];
  immediate?: boolean;
}

interface UseAsyncDataResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useAsyncData<T>(options: UseAsyncDataOptions<T>): UseAsyncDataResult<T> {
  const { fetchFn, deps = [], immediate = true } = options;
  
  const [state, setState] = useState({
    data: null as T | null,
    loading: immediate,
    error: null as Error | null,
  });

  const retryCountRef = useRef(0);
  const maxRetries = 1;

  const execute = useCallback(() => {
    try {
      const result = fetchFn();
      setState({ data: result, loading: false, error: null });
      retryCountRef.current = 0;
    } catch (e) {
      retryCountRef.current++;
      setState(s => ({ ...s, loading: false, error: e as Error }));
    }
  }, deps);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  const refetch = useCallback(() => {
    setState(s => ({ ...s, loading: true, error: null }));
    execute();
  }, [execute]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    refetch,
  };
}

export function useAsyncDataWithRetry<T>(options: UseAsyncDataOptions<T>): UseAsyncDataResult<T> & { hasRetried: boolean } {
  const result = useAsyncData(options);
  const [hasRetried, setHasRetried] = useState(false);

  const refetchWithRetry = useCallback(() => {
    if (!hasRetried) {
      setHasRetried(true);
    }
    result.refetch();
  }, [hasRetried, result.refetch]);

  return { ...result, hasRetried, refetch: refetchWithRetry };
}

export function usePromiseData<T>(promiseFn: () => Promise<T>, deps: React.DependencyList[] = []) {
  const [state, setState] = useState({
    data: null as T | null,
    loading: true,
    error: null as Error | null,
  });

  const execute = useCallback(async () => {
    try {
      const result = await promiseFn();
      setState({ data: result, loading: false, error: null });
    } catch (e) {
      setState(s => ({ ...s, loading: false, error: e as Error }));
    }
  }, deps);

  useEffect(() => {
    execute();
  }, [execute]);

  return state;
}