import { Constants } from './constants';
export interface IInitialState {
  data: IData;
  selectedSort: keyof CopyData,
  equal: boolean
}

export type CopyData = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  rating: number;
  salary: number;
}
export type IData = CopyData[];

export type KeysData = ['id', 'first_name', 'last_name', 'email', 'rating', 'salary']

export interface ISetData {
  type: Constants.SET_DATA_REDUX;
  data: IData;
}

export interface ISortData {
  type: Constants.SET_SORT_DATA_REDUX;
  data: keyof CopyData;
}
export interface IEqualData {
  type: Constants.SET_EQUAL_DATA_REDUX;
  data: boolean;
}

export enum Title {
  id = 'ID',
  first_name = 'First Name',
  last_name = 'Last Name',
  email = 'Email',
  rating = 'Rating',
  salary = 'Salary',
}

export type Action = ISetData | ISortData | IEqualData;
