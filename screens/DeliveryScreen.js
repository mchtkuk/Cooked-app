import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../redux/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/outline";


const DeliveryScreen = () => {
  const restaurant = useSelector(selectRestaurant);

  const navigation = useNavigation();

  return (
    <View className="bg-orange-500 flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-white text-lg font-light">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-end">
          <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-4xl font-bold mt-2">45-55 Minutes</Text>
          </View>
        </View>
        
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
