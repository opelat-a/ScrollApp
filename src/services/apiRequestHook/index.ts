import { useCallback, useState } from 'react';

interface IUseAsync<T> {
  error: null | Error;
  loading: boolean;
  execute: () => void;
}

interface Props<T> {
  asyncFunction: () => Promise<T | void>;
  dispatch: (data: T) => void;
}

export const useAsyncRedux = <T>({
  asyncFunction,
  dispatch,
}: Props<T>): IUseAsync<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      const response: T | void = await asyncFunction();
      if (response) {
        dispatch(response);
      }
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, []);

  return { error, execute, loading };
};
