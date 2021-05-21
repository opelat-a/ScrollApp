import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
    text: string | number,
    title: string,
    first?: boolean
}
export const ViewElement: FC<Props> = ({ text, title, first }) =>
    <View style={[styles.view, { flex: first ? 0 : 1 }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
    </View>;
