import { Constants } from './constants';
import { IData, ISetData, CopyData, IEqualData, ISortData } from './types';

export const setDataRedux = (data: IData): ISetData => ({
  type: Constants.SET_DATA_REDUX,
  data,
});

export const setSortDataRedux = (data: keyof CopyData): ISortData => ({
  type: Constants.SET_SORT_DATA_REDUX,
  data,
});

export const setEqualDataRedux = (data: boolean): IEqualData => ({
  type: Constants.SET_EQUAL_DATA_REDUX,
  data,
});
