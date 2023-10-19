import { View, Text, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import React from 'react'

const PreparingScreen = () => {
  return (
    <SafeAreaView className="justify-center items-center flex-1 bg-white">
      <Animatable.Image
      source={require("../public/image.gif")}
      animation="slideInUp"
      iterationCount={1}
      className="w-96 h-96"
      />
      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg font-bold text-orange-500 text-center"
      >Chef is accepting your order!</Animatable.Text>
    </SafeAreaView>
  )
}

export default PreparingScreen