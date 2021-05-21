import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { ViewElement } from '@components/viewElement';
import { styles } from './styles';
import { CopyData, Title } from '@reducers/dataReducer/types';

type Props = {
    item: CopyData,
    onPressHandler: (id: number) => void
}

export const FlatListItem: FC<Props> = ({ item, onPressHandler }) =>
    <TouchableOpacity
        onPress={() => onPressHandler(item.id)}
        style={styles.view}>
        <ViewElement text={item?.id} title={Title.id} first />
        <ViewElement text={item?.first_name} title={Title.first_name} />
        <ViewElement text={item?.rating} title={Title.rating} />
        <ViewElement text={item?.salary} title={Title.salary} />
    </TouchableOpacity>;
