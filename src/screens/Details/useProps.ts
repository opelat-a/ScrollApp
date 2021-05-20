import { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { CopyData, KeysData } from '@reducers/dataReducer/types';
import { getStoreData } from '@selectors';
import { useRoute } from '@react-navigation/core';

export interface IPropsDetails {
    data: CopyData | void;
    keys: KeysData;
}

export const useProps = (): IPropsDetails => {
    const route = useRoute();
    const id = route?.params?.id;


    const dataRedux = useSelector(getStoreData, shallowEqual);
    const data = useMemo(() => dataRedux.find(item => item.id === id), [id]);

    const keys = (Object.keys(data ?? {})) as KeysData;
    return { data, keys };
};
