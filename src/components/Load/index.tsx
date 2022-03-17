
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../image/heart.json'

//import LottieView from 'lottie-react-native'

//import loadAnimation from '../image/loads.json'


export function Load(){
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../image/heart.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF'
  },
  animation:{
    backgroundColor: "transparent",
    width: 200,
    height: 200
  }
})