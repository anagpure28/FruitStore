import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import * as AppConstants from './src/constants/AppConstants';
import NewNavigator from './src/navigation/NewNavigator';
//-redux code start

// import {Provider} from 'react-redux';
// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import ReduxThunk from 'redux-thunk';

// import authReducers from './src/stores/reducers/auth';
// import addressesReducers from './src/stores/reducers/addresses';
//
// const rootReducer = combineReducers({
//   auth: authReducers,
//     addresses: addressesReducers,
// });

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//redux end here

export default function App () {
  return (
      // <Provider store={store}>
      <NewNavigator />
      // </Provider>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
