import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export const DetailsScreen: FC = () => {
  console.log('helloNewComponent');

  return (
    <View style={{flex: 1, backgroundColor: 'orange'}}>
      <Text>Details</Text>
    </View>
  );
};
