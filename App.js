import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './src/service/ConfigureStore';
import AppNavigator from './src/AppNavigator';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}> 
      <AppNavigator />
    </Provider>
  );
}