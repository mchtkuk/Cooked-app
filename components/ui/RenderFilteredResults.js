import React from 'react';
import { View, FlatList, VirtualizedList } from 'react-native';
import RestaurantCard from './RestaurantCard';

const RenderFilteredResults = ({ data }) => {
  return (
    <View className="flex mb-36 items-center">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Use a unique key for each restaurant
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="flex p-2">
          <RestaurantCard
            id={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            rating={item.rating}
            genre={item.genre}
            address={item.address}
            short_description={item.short_description}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
          />
          </View>
        )}
      />
    </View>
  );
};

export default RenderFilteredResults;