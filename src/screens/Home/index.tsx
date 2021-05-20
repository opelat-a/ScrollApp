import React, {FC, memo, useCallback} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {IData} from '../../store/reducers/dataReducer/types';
import {useProps} from './useProps';

type Props = {
  loading: boolean;
  data: IData;
  error: null | Error;
};
export const HomeScreenView: FC<Props> = memo(
  ({data, loading, error, ...rest}) => {
    console.log('helloNewComponent', data, loading, rest);
    const renderItem = useCallback(
      ({item}) => (
        <View
          style={{
            width: '100%',
            height: 20,
            marginVertical: 5,
            backgroundColor: 'purple',
          }}>
          <Text>{item?.first_name}</Text>
        </View>
      ),
      [],
    );

    const keyExtractor = useCallback(item => item?.id.toString(), []);

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'orange',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={{
            width: '100%',
            paddingHorizontal: 20,
            justifyContent: 'center',
          }}
          style={{width: '100%', flex: 1}}
        />
      </View>
    );
  },
);

export const HomeScreen = ({navigation}) => (
  <HomeScreenView {...{...useProps()}} />
);
