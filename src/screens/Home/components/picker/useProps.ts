import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setEqualDataRedux, setSortDataRedux } from '@reducers/dataReducer/actions';
import { getStoreEqualData, getStoreSortData } from '@selectors';
import { CopyData } from '@reducers/dataReducer/types';

export interface IPropsPicker {
    onPressHandler: () => void;
    equal: boolean;
    selectedSort: keyof CopyData;
    onSortHandler: (data: keyof CopyData) => void;
}

export const useProps = (): IPropsPicker => {
    const selectedSort = useSelector(getStoreSortData, shallowEqual);
    const equal = useSelector(getStoreEqualData, shallowEqual);
    const dispatch = useDispatch();

    const onPressHandler = () => {
        dispatch(setEqualDataRedux(!equal));
    };

    const onSortHandler = (data: keyof CopyData) => {
        dispatch(setSortDataRedux(data));
    };

    return { equal, selectedSort, onPressHandler, onSortHandler };
};
