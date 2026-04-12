import { useState, useCallback, useRef, useEffect } from "react";
function useAsyncData(options) {
  const {
    fetchFn,
    deps = [],
    immediate = true
  } = options;
  const [state, setState] = useState({
    data: null,
    loading: immediate,
    error: null
  });
  const retryCountRef = useRef(0);
  const execute = useCallback(() => {
    try {
      const result = fetchFn();
      setState({
        data: result,
        loading: false,
        error: null
      });
      retryCountRef.current = 0;
    } catch (e) {
      retryCountRef.current++;
      setState((s) => ({
        ...s,
        loading: false,
        error: e
      }));
    }
  }, deps);
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  const refetch = useCallback(() => {
    setState((s_0) => ({
      ...s_0,
      loading: true,
      error: null
    }));
    execute();
  }, [execute]);
  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    refetch
  };
}
function useAsyncDataWithRetry(options) {
  const result = useAsyncData(options);
  const [hasRetried, setHasRetried] = useState(false);
  const refetchWithRetry = useCallback(() => {
    if (!hasRetried) {
      setHasRetried(true);
    }
    result.refetch();
  }, [hasRetried, result.refetch]);
  return {
    ...result,
    hasRetried,
    refetch: refetchWithRetry
  };
}
export {
  useAsyncDataWithRetry as u
};
