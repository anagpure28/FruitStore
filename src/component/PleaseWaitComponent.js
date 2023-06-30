import React from 'react';
import {
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import {
  BUTTON_TOUCHABLE_OPACITY,
  HAMBURGER_HEIGHT,
  HAMBURGER_MARGIN_LEFT,
  HAMBURGER_WIDTH,
  HEADER_ICON_SIZE,
} from '../../constants/AppDefines';
import {useSelector} from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

const PleaseWaitComponent = props => {
  // get venue theme from redux
  // const theme = useSelector(state => state.theme.theme);

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
      <ActivityIndicator size="large" color={Colors.headerBackgroundColor} />
      <Text style={{color: Colors.headerBackgroundColor}}>Please wait...</Text>
    </View>
  );
};

export default PleaseWaitComponent;
