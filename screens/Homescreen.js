import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, Button, SafeAreaView, Image, TextInput } from "react-native";
import { ChevronDownIcon, UserIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function Homescreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-orange-600 pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../public/logov01.png")}
          className="h-10 w-10 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-300 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl text-white">
            Choose Location
            <ChevronDownIcon size={20} color="white" />
          </Text>
        </View>

        <UserIcon size={35} color="white" />
      </View>
      <View className="flex-row items-center space-x-4 pb-2 mx-6">
        <View className="flex-row flex-1 justify-center space-x-2 bg-transparent p-3 items-center">
          <MagnifyingGlassIcon color="white" />
          <TextInput className="bg-white w-full rounded p-2" placeholder="Food and Cuisines" keyboardType="default" />
        </View>
        <AdjustmentsHorizontalIcon color="white" />
      </View>
    </SafeAreaView>
  );
}
