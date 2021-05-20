import {Constants} from './constants';
import {Action, IInitialState} from './types';

export const initialState: IInitialState = {
  data: [],
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

    default: {
      return state;
    }
  }
};
