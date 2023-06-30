import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import * as AppConstants from '../constants/AppConstants';
// import {pixelNormalize} from '../constants/Size';

import Colors from '../constants/Colors';

const TryAgainComponent = props => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{
          height: AppConstants.pixelNormalize(30),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.headerBackgroundColor,
          borderRadius: AppConstants.pixelNormalize(5),
          width: AppConstants.pixelNormalize(100),
          marginVertical: AppConstants.pixelNormalize(10),
        }}
        onPress={props.onClickTryAgain}>
        <Text style={{color: Colors.white}}>Try Again</Text>
      </TouchableOpacity>
      {/*<Text style={{color: Colors.headerBackgroundColor}}>*/}
      {/*  Please wait...*/}
      {/*</Text>*/}
    </View>
  );
};

export default TryAgainComponent;
