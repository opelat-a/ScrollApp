import {Constants} from './constants';
export interface IInitialState {
  data: IData;
}

export type IData = {name: string}[];

export interface ISetData {
  type: Constants.SET_DATA_REDUX;
  data: IData;
}
export type Action = ISetData;
