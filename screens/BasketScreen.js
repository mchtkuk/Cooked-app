import { View, Text, SafeAreaView, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../redux/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../redux/basketSlice'

const BasketScreen = () => {

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal)
  const [groupedItems, setGroupedItem] = useState([])
  const dispatch = useDispatch();

  let deliveryFee = 5.99

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItem(groupedItems);
  }, [items])
 
 
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
        <View className="p-5 border-b border-[orange] shadow-xs bg-orange-500">
          <Text className="text-lg font-bold text-white text-center">Basket</Text>
          <Text className="text-center text-white">{restaurant.title}</Text>
        </View>
      <View className="flex-row items-center space-x-4 px-4 py-3 my-5">
        <Image
        source={{
          uri: "https://www.atasehirmotorkurye.com/wp-content/uploads/2022/08/moto-kurye-512x450-1.png"
        }}
        className="h-7 w-7 bg-transparent p-4 rounded-full"
        />
        <Text className="flex-1">Deliver in 40-60 min</Text>
        <TouchableOpacity>
          <Text className="text-orange-500">Change</Text>
        </TouchableOpacity>
      </View>
      <View className="divide-y divide-gray-200">
        {Object.entries(groupedItems).map(([key,items]) => (
          <View className="flex-row items-center space-x-3 bg-white py-2 px-5" key={key}>
            <Text className="text-orange-500">{items.length} x</Text>
            <Image 
            source={{
              uri: items[0]?.image
            }}
            className="h-12 w-12 rounded-full" />
            <Text className="flex-1">{items[0]?.name}</Text>
            <Text>${items[0]?.price}</Text>
            <TouchableOpacity>
              <Text
              className="text-orange-500 text-xs"
              onPress={()=> dispatch(removeFromBasket({id: items[0].id}))}
              >Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View className="p-5 bg-white mt-5 space-y-4">
        <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">{basketTotal}</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">{deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-400">Order Total</Text>
            <Text className="text-gray-400">${(parseFloat(basketTotal) + deliveryFee).toFixed(2)}</Text>
        </View>
        <TouchableOpacity className="rounded-lg bg-orange-400 p-4">
          <Text className="text-center text-white text-lg font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BasketScreen