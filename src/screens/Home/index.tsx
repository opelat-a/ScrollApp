import React, {FC, memo} from 'react';
import {View, Text} from 'react-native';
import {IData} from '../../store/reducers/dataReducer/types';
import {useProps} from './useProps';

type Props = {
  loading: boolean;
  data: IData;
};
export const HomeScreenView: FC<Props> = memo(({data, loading, ...rest}) => {
  console.log('helloNewComponent', data, loading, rest);

  return (
    <View style={{flex: 1, backgroundColor: 'orange'}}>
      <Text>Hello</Text>
    </View>
  );
});

export const HomeScreen = ({navigation}) => (
  <HomeScreenView {...{...useProps()}} />
);
