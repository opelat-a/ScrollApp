import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {RootNavigation} from './src/navigation/rootNavigation';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
