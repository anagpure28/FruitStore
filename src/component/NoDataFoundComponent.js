import React from 'react';
import { TouchableOpacity, Image, View, Text } from "react-native";
import {
  BUTTON_TOUCHABLE_OPACITY,
  HAMBURGER_HEIGHT,
  HAMBURGER_MARGIN_LEFT,
  HAMBURGER_WIDTH,
  HEADER_ICON_SIZE,
} from '../../constants/AppDefines';
import {useSelector} from 'react-redux';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { pixelNormalize } from '../constants/Size';
import { LOGIN_SCREEN_BUTTON_MARGIN_VERTICAL } from "../constants/AppDefines";
import Colors from "../constants/Colors";
import * as AppConstants from "../constants/AppConstants";

const NoDataFoundComponent = props => {
  // get venue theme from redux
  const theme = useSelector(state => state.theme.theme);

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

      <Text style={{color: Colors.headerBackgroundColor}}>
        No Data Found
      </Text>
      <TouchableOpacity
        style={{
          height: AppConstants.pixelNormalize(30),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.primary,
          borderRadius: AppConstants.pixelNormalize(5),
          width: AppConstants.pixelNormalize(100),
          marginVertical: AppConstants.pixelNormalize(5),
        }}
        onPress={props.onClickTryAgain}>
        <Text style={{
          color: Colors.white,
        }}>Try Again.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoDataFoundComponent;
