import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './ui/RestaurantCard';

const DiscountsRow = ({title, id, description}) => {
  const [discountRestaurants, setDiscountRestaurants] = useState([]);

  const getDiscountRestaurants = (endpoint, setData) => {
    axios.get(`http://192.168.1.28:3000/${endpoint}`)
      .then((response) => {
        const data = response.data[0].restaurants;
        setData(data);
      })
      .catch((error) => {
        console.error(`Error fetching data:`, error);
      });
  };

  useEffect(() => {
    getDiscountRestaurants("discounts", setDiscountRestaurants);
  }, []);



  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="orange"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
      }} showsHorizontalScrollIndicator={false} className="pt-4">
 
      {discountRestaurants.map((restaurants) => (
          <RestaurantCard
            key={restaurants.id}
            id={restaurants.id}
            imgUrl={restaurants.imgUrl}
            title={restaurants.title}
            rating={restaurants.rating}
            genre={restaurants.genre}
            address={restaurants.address}
            short_description={restaurants.short_description}
            dishes={restaurants.dishes}
            long={restaurants.long}
            lat={restaurants.lat}
          />
        ))}
             </ScrollView>
    </View>
  )
}

export default DiscountsRow