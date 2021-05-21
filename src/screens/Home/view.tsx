import React, { FC, memo, useCallback } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { IPropsHome } from './useProps';
import { SortPicker } from './components/picker';
import { FlatListItem } from '@components/flatListItem';
import { styles } from './styles';

export const HomeScreenView: FC<IPropsHome> = memo(
    ({ data, loading, error, onPressHandler }) => {

        const renderItem = useCallback(
            ({ item }) => ( <FlatListItem item={item} onPressHandler={onPressHandler} />),
            [],
        );

        const keyExtractor = useCallback(item => item?.id.toString(), []);

        if (error) {
            return <View style={styles.error} />;
        }

        if (loading) {
            return <ActivityIndicator color={'black'} size="large" style={styles.indicator} />;
        }

        return (
            <View
                style={styles.view}>
                <SortPicker />
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    contentContainerStyle={styles.content}
                    style={styles.flatList}
                />
            </View>
        );
    },
);
