import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {

  const items = useSelector(selectBasketItems)

  const navigation = useNavigation()

  const basketTotal = useSelector(selectBasketTotal);

  if(items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="bg-orange-400 mx-5 p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-bold text-lg py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">${basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon