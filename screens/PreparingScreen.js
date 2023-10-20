import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable';
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const PreparingScreen = () => {

  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(()  => {
      navigation.navigate("Delivery")
    }, 5000)
  }, [])
 

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
         <ActivityIndicator size="large" color="orange" className="mt-5"/>
    </SafeAreaView>
  )
}



export default PreparingScreen