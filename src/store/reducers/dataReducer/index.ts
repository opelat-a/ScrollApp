import { Constants } from './constants';
import { Action, IInitialState } from './types';

export const initialState: IInitialState = {
  data: [],
  selectedSort: 'id',
  equal: true,
};

export default (
  state: IInitialState = initialState,
  action: Action,
): IInitialState => {
  switch (action.type) {
    case Constants.SET_DATA_REDUX:
      return {
        ...state,
        data: action.data,
      };
    case Constants.SET_EQUAL_DATA_REDUX:
      return {
        ...state,
        equal: action.data,
      };
    case Constants.SET_SORT_DATA_REDUX:
      return {
        ...state,
        selectedSort: action.data,
      };
    default: {
      return state;
    }
  }
};
