import { useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useAsyncRedux } from '@services/apiRequestHook';
import { url } from '@services/url/url';
import { setDataRedux } from '@reducers/dataReducer/actions';
import { IData } from '@reducers/dataReducer/types';
import { getStoreData, getStoreEqualData, getStoreSortData } from '@selectors';
import { useNavigation } from '@react-navigation/core';
import { sortHelper } from 'services/utils';

export interface IPropsHome {
  loading: boolean;
  data: IData;
  error: Error | null;
  onPressHandler: (id: number) => void;
}

export const useProps = (): IPropsHome => {
  const navigation = useNavigation();

  const getData = async (): Promise<IData | void> => {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
  };
  const dispatch = useDispatch();

  const dispatchToRedux = (data: IData): void => {
    dispatch(setDataRedux(data));
  };

  const dataRedux = useSelector(getStoreData, shallowEqual);
  const equal = useSelector(getStoreEqualData, shallowEqual);
  const sortValue = useSelector(getStoreSortData, shallowEqual);

  const data = useMemo(() => sortHelper(sortValue, equal, dataRedux), [dataRedux, equal, sortValue]);

  const { execute, loading, error } = useAsyncRedux<IData>({
    asyncFunction: getData,
    dispatch: dispatchToRedux,
  });

  const onPressHandler = (id: number) => {
    navigation?.navigate('Details', { id });
  };

  useEffect(() => {
    execute();
  }, []);

  return { loading, data, error, onPressHandler };
};
