import {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useAsyncRedux} from '../../services/apiRequestHook';
import {url} from '../../services/url/url';
import {setDataRedux} from '../../store/reducers/dataReducer/actions';
import {IData} from '../../store/reducers/dataReducer/types';
import {getStoreData} from '../../store/selectors/selectors';

interface IPropsHome {
  loading: boolean;
  data: IData;
  error: Error | null;
}

export const useProps = (): IPropsHome => {
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
  const data = useSelector(getStoreData, shallowEqual);

  const {execute, loading, error} = useAsyncRedux<IData>({
    asyncFunction: getData,
    dispatch: dispatchToRedux,
  });

  useEffect(() => {
    execute();
  }, []);

  return {loading, data, error};
};
