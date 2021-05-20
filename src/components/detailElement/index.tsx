import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
    text: string | number,
    title: string,
    first?: boolean
}
export const DetailElement: FC<Props> = ({ text, title }) =>
    <View style={[styles.view, { flex: 1 }]}>
        <Text style={styles.title}>{title}:</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
