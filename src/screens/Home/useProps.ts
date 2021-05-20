import {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useAsyncRedux} from '../../services/apiRequestHook';
import {setDataRedux} from '../../store/reducers/dataReducer/actions';
import {IData} from '../../store/reducers/dataReducer/types';
import {getStoreData} from '../../store/selectors/selectors';

const url = 'https://run.mocky.io/v3/3078319a-299e-4a52-920b-d183d2d5fdc5';

interface IPropsHome {
  loading: boolean;
  data: IData;
}
// interface Props {
//   asyncFunction: <T>() => Promise<T>;
// }
export const useProps = (): IPropsHome => {
  console.log('useProps');
  const getData = async <IData>(): Promise<IData | void> => {
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

  const {execute, loading} = useAsyncRedux<IData>({
    asyncFunction: getData,
    dispatch: dispatchToRedux,
  });

  useEffect(() => {
    execute();
  }, []);

  return {loading, data};
};
