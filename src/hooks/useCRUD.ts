"use client";
import { useState, useCallback, useRef } from "react";

interface ICrudState<T = any> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
}

interface ICrudOptions {
  isCache?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

interface ICrudHookReturn<T = any> {
  // State
  data: T | null;
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;

  // Actions
  execute: (
    requestFn: () => Promise<T>,
    options?: ICrudOptions
  ) => Promise<T | null>;
  reset: () => void;

  // CRUD specific methods
  create: (
    createFn: () => Promise<T>,
    options?: ICrudOptions
  ) => Promise<T | null>;
  read: (readFn: () => Promise<T>, options?: ICrudOptions) => Promise<T | null>;
  update: (
    updateFn: () => Promise<T>,
    options?: ICrudOptions
  ) => Promise<T | null>;
  delete: (
    deleteFn: () => Promise<T>,
    options?: ICrudOptions
  ) => Promise<T | null>;
}

// Cache store (simple in-memory cache)
const cacheStore = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Cache utilities
const getCacheKey = (fn: Function): string => {
  return fn.toString(); // Simple cache key based on function string
};

const getCachedData = (key: string) => {
  const cached = cacheStore.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  cacheStore.delete(key);
  return null;
};

const setCachedData = (key: string, data: any) => {
  cacheStore.set(key, { data, timestamp: Date.now() });
};

// Main CRUD Hook
export const useCrud = <T = any>(): ICrudHookReturn<T> => {
  const [state, setState] = useState<ICrudState<T>>({
    data: null,
    isLoading: false,
    error: null,
    isSuccess: false,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const reset = useCallback(() => {
    setState({
      data: null,
      isLoading: false,
      error: null,
      isSuccess: false,
    });
  }, []);

  const execute = useCallback(
    async (
      requestFn: () => Promise<T>,
      options: ICrudOptions = {}
    ): Promise<T | null> => {
      const { isCache = false, onSuccess, onError } = options;

      // Cancel previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Check cache first if caching is enabled
      if (isCache) {
        const cacheKey = getCacheKey(requestFn);
        const cachedData = getCachedData(cacheKey);
        if (cachedData) {
          setState({
            data: cachedData,
            isLoading: false,
            error: null,
            isSuccess: true,
          });
          onSuccess?.(cachedData);
          return cachedData;
        }
      }

      // Create new abort controller
      abortControllerRef.current = new AbortController();

      setState((prev) => ({
        ...prev,
        isLoading: true,
        error: null,
        isSuccess: false,
      }));

      try {
        const result = await requestFn();

        if (isCache) {
          const cacheKey = getCacheKey(requestFn);
          setCachedData(cacheKey, result);
        }

        setState({
          data: result,
          isLoading: false,
          error: null,
          isSuccess: true,
        });

        onSuccess?.(result);
        return result;
      } catch (error: any) {
        // Don't update state if request was aborted
        if (error.name === "AbortError") {
          return null;
        }

        const errorMessage = error?.message || "An error occurred";

        setState({
          data: null,
          isLoading: false,
          error: errorMessage,
          isSuccess: false,
        });

        onError?.(errorMessage);
        return null;
      }
    },
    []
  );

  // CRUD specific methods
  const create = useCallback(
    (createFn: () => Promise<T>, options?: ICrudOptions) => {
      return execute(createFn, { ...options, isCache: false });
    },
    [execute]
  );

  const read = useCallback(
    (readFn: () => Promise<T>, options?: ICrudOptions) => {
      return execute(readFn, options);
    },
    [execute]
  );

  const update = useCallback(
    (updateFn: () => Promise<T>, options?: ICrudOptions) => {
      return execute(updateFn, { ...options, isCache: false });
    },
    [execute]
  );

  const deleteOperation = useCallback(
    (deleteFn: () => Promise<T>, options?: ICrudOptions) => {
      return execute(deleteFn, { ...options, isCache: false });
    },
    [execute]
  );

  return {
    // State
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    isSuccess: state.isSuccess,

    // Actions
    execute,
    reset,

    // CRUD methods
    create,
    read,
    update,
    delete: deleteOperation,
  };
};

export const useCreate = <T = any>() => {
  const { create, isLoading, error, isSuccess, data, reset } = useCrud<T>();
  return { create, isLoading, error, isSuccess, data, reset };
};

export const useRead = <T = any>() => {
  const { read, isLoading, error, isSuccess, data, reset } = useCrud<T>();
  return { read, isLoading, error, isSuccess, data, reset };
};

export const useUpdate = <T = any>() => {
  const { update, isLoading, error, isSuccess, data, reset } = useCrud<T>();
  return { update, isLoading, error, isSuccess, data, reset };
};

export const useDelete = <T = any>() => {
  const {
    delete: deleteOp,
    isLoading,
    error,
    isSuccess,
    data,
    reset,
  } = useCrud<T>();
  return { delete: deleteOp, isLoading, error, isSuccess, data, reset };
};

export const useResourceCrud = <T = any>(baseUrl: string) => {
  const crud = useCrud<T>();

  const createResource = useCallback(
    (data: Partial<T>, options?: ICrudOptions) => {
      return crud.create(async () => {
        const response = await fetch(baseUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!response.ok)
          throw new Error(`Create failed: ${response.statusText}`);
        return response.json();
      }, options);
    },
    [crud, baseUrl]
  );

  const readResource = useCallback(
    (id?: string | number, options?: ICrudOptions) => {
      return crud.read(async () => {
        const url = id ? `${baseUrl}/${id}` : baseUrl;
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Read failed: ${response.statusText}`);
        return response.json();
      }, options);
    },
    [crud, baseUrl]
  );

  const updateResource = useCallback(
    (id: string | number, data: Partial<T>, options?: ICrudOptions) => {
      return crud.update(async () => {
        const response = await fetch(`${baseUrl}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!response.ok)
          throw new Error(`Update failed: ${response.statusText}`);
        return response.json();
      }, options);
    },
    [crud, baseUrl]
  );

  const deleteResource = useCallback(
    (id: string | number, options?: ICrudOptions) => {
      return crud.delete(async () => {
        const response = await fetch(`${baseUrl}/${id}`, {
          method: "DELETE",
        });
        if (!response.ok)
          throw new Error(`Delete failed: ${response.statusText}`);
        return response.json();
      }, options);
    },
    [crud, baseUrl]
  );

  return {
    ...crud,
    createResource,
    readResource,
    updateResource,
    deleteResource,
  };
};
