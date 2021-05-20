import {AppStateType} from '../type';

export const getStoreData = (state: AppStateType) => state.dataReducer.data;
