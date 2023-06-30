import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar, Platform, } from 'react-native';
import * as AppConstants from '../constants/AppConstants';

export default function FirstScreen(props) {
    console.log(props);
  return (
    <View style={styles.backgroundColor}>
      <View style={styles.semicircle}>
      </View>
      <Image
        source={require('../assets/Shop1.png')}
        style={{
          height: AppConstants.pixelNormalize(343),
          width: AppConstants.pixelNormalize(305),
          marginTop: AppConstants.pixelNormalize(-200),
          marginLeft: AppConstants.pixelNormalize(34),
        }} />
      <View>
        <Text style={{
          marginTop: AppConstants.pixelNormalize(48),
          fontSize: AppConstants.pixelNormalize(23),
          textAlign: 'center',
          color: '#000000'
        }}>
          Buy Fresh & Organic Fruits
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => { props.navigation.navigate('Second'); }}
      >
        <View style={styles.rectangle}>
          <Text style={{
            marginTop: AppConstants.pixelNormalize(15),
            marginLeft: AppConstants.pixelNormalize(70),
            fontSize: AppConstants.pixelNormalize(16),
            color: '#FFFFFF'
          }}>Start Shopping Now</Text>
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => { props.navigation.navigate('Second'); }}>
          <Text style={{
            marginTop: AppConstants.pixelNormalize(24),
            marginLeft: AppConstants.pixelNormalize(161),
            fontSize: AppConstants.pixelNormalize(12),
            color: '#000000'
          }}>Skip intro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};


const styles = StyleSheet.create({
  rectangle: {
    height: AppConstants.pixelNormalize(55),
    width: AppConstants.pixelNormalize(277),
    marginTop: AppConstants.pixelNormalize(66),
    marginLeft: AppConstants.pixelNormalize(49),
    backgroundColor: '#ff3464',
    borderTopLeftRadius: AppConstants.pixelNormalize(20),
    borderBottomRightRadius: AppConstants.pixelNormalize(20),
  },
  semicircle: {
    width: AppConstants.pixelNormalize(380),
    height: AppConstants.pixelNormalize(380),
    borderRadius: AppConstants.pixelNormalize(300),
    marginTop: AppConstants.pixelNormalize(-100),
    marginLeft: AppConstants.pixelNormalize(100),
    backgroundColor: '#FFEFF3',
    opacity: 0.5
  },
  backgroundColor: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF'
  }
});
