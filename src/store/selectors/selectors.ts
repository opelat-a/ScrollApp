import { AppStateType } from '../type';

export const getStoreData = (state: AppStateType) => state.dataReducer.data;
export const getStoreSortData = (state: AppStateType) => state.dataReducer.selectedSort;
export const getStoreEqualData = (state: AppStateType) => state.dataReducer.equal;

