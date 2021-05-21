import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';

export type AppStateType = ReturnType<typeof rootReducer>;
export const useSelectorTs: TypedUseSelectorHook<AppStateType> = useSelector;
