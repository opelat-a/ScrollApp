import React, { FC } from 'react';
import { View } from 'react-native';
import { Title } from '@reducers/dataReducer/types';
import { IPropsDetails } from './useProps';
import { DetailElement } from 'components/detailElement';
import { styles } from './styles';

export const DetailsScreenView: FC<IPropsDetails> = ({ data, keys }) => {
    if (!data) {
        return null;
    }
    return (
        <View style={styles.conteiner}>
            <View style={styles.card}>
                {keys.map((key => <DetailElement text={data[key]} title={Title[key]} key={key} />))}
            </View>
        </View>
    );
};
