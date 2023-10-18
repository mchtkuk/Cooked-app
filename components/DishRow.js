import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from "../redux/basketSlice";

const DishRow = ({ id, name, price, image}) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch()
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, price, image}))
  }

  const removeItemsFromBasket = () => {
    if(!items.length > 0) return;

    dispatch(removeFromBasket({id}))
  }

  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">${price}</Text>
          </View>
          <Image style={{
            borderWidth: 1,
            borderColor: "gray"
          }} source={{
            uri: image
          }} className="h-20 w-20 bg-gray-300 p-4">
          </Image>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white p-4">
          <View className="flex-row  items-center space-x-2 pb-1">
            <TouchableOpacity onPress={removeItemsFromBasket} disabled={!items.length}>
              <MinusCircleIcon
              size={40}
              color={items.length > 0 ? "orange" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="orange"></PlusCircleIcon>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
