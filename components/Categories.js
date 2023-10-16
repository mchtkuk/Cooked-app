import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./ui/CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard imgUrl="https://i.lezzet.com.tr/images-xxlarge-recipe/maki-sushi-072c777c-a636-4130-ab6e-ef7d4dbd9780.jpg" title="testing" />
      <CategoryCard imgUrl="https://i.lezzet.com.tr/images-xxlarge-recipe/maki-sushi-072c777c-a636-4130-ab6e-ef7d4dbd9780.jpg" title="testing" />
      <CategoryCard imgUrl="https://i.lezzet.com.tr/images-xxlarge-recipe/maki-sushi-072c777c-a636-4130-ab6e-ef7d4dbd9780.jpg" title="testing" />
      <CategoryCard imgUrl="https://i.lezzet.com.tr/images-xxlarge-recipe/maki-sushi-072c777c-a636-4130-ab6e-ef7d4dbd9780.jpg" title="testing" />
      <CategoryCard imgUrl="https://i.lezzet.com.tr/images-xxlarge-recipe/maki-sushi-072c777c-a636-4130-ab6e-ef7d4dbd9780.jpg" title="testing" />
      <CategoryCard imgUrl="https://i.lezzet.com.tr/images-xxlarge-recipe/maki-sushi-072c777c-a636-4130-ab6e-ef7d4dbd9780.jpg" title="testing" />
    </ScrollView>
  );
};

export default Categories;
