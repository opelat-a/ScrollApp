import {Constants} from './constants';
import {IData, ISetData} from './types';

export const setDataRedux = (data: IData): ISetData => ({
  type: Constants.SET_DATA_REDUX,
  data,
});
