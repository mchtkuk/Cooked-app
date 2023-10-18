import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { setRestaurant } from "../redux/restaurantSlice";
import { useDispatch } from "react-redux";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(setRestaurant({
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    }));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View>
          <Image
            source={{
              uri: imgUrl,
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 rounded-full bg-white p-2"
          >
            <ArrowLeftIcon size={25} color="orange" />
          </TouchableOpacity>
          <View className="bg-white">
            <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{title}</Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <StarIcon color="orange" opacity={0.5} size={22} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-orange-500">{rating}</Text> - {genre}
                  </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <MapPinIcon color="gray" opacity={0.4} size={22} />
                  <Text className="text-xs text-gray-500">
                    Nearby - {address}
                  </Text>
                </View>
              </View>
              <Text className="text-gray-500 mt-2 pb-4">
                {short_description}
              </Text>
            </View>
            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-200">
              <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
              <Text className="pl-2 flex-1 text-md font-bold text">
                Have a food allergy?
              </Text>
              <ChevronRightIcon color="orange" />
            </TouchableOpacity>
          </View>
          <View>
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          </View>
        </View>
        <View className="pb-36">
          {dishes.map((dishes) => (
            <DishRow
              key={dishes.id}
              id={dishes.id}
              name={dishes.name}
              price={dishes.price}
              image={dishes.imgUrl}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
