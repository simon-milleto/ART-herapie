import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './navigators/RootNavigator';
import store from './store';

const AppProvider = ({navigation}) => (
  <Provider store={store} navigation={navigation}>
    <RootNavigator />
  </Provider>
);

export default AppProvider;
