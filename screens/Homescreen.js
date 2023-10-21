import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories.js";
import FeaturedRow from "../components/FeaturedRow.js";
import axios from "axios";
import OffersRow from "../components/OffersRow.js";
import DiscountsRow from "../components/DiscountsRow.js";

export default function Homescreen() {
  const [featured, setFeatured] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [offers, setOffers] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const getData = (endpoint, setData) => {
    axios
      .get(`http://192.168.1.28:3000/${endpoint}`)
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.error(`Error fetching ${endpoint} data:`, error);
      });
  };

  useEffect(() => {
    getData("featured", setFeatured);
    getData("discounts", setDiscounts);
    getData("offers", setOffers);
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
            Current Location
            <ChevronDownIcon size={20} color="white" />
          </Text>
        </View>

        <UserIcon size={35} color="white" />
      </View>
      <View className="flex-row items-center space-x-4 pb-2 mx-6">
        <View className="flex-row flex-1 justify-center space-x-2 bg-transparent p-3 items-center">
          <MagnifyingGlassIcon color="white" />
          <TextInput
            className="bg-white w-full rounded p-2"
            placeholder="Food and Cuisines"
            keyboardType="default"
            onPressIn={() => navigation.navigate("Search")}
          />
        </View>
        <AdjustmentsHorizontalIcon color="white" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
        <Categories />
        {featured.map((featured) => (
          <FeaturedRow
            key={featured.id}
            id={featured.id}
            title={featured.name}
            description={featured.description}
          />
        ))}

        {/* Display Offers Restaurants */}
        {offers.map((offers) => (
          <OffersRow
            key={offers.id}
            id={offers.id}
            title={offers.name}
            description={offers.description}
          />
        ))}
        {/* Display Discounts Restaurants */}
        {discounts.map((discounts) => (
          <DiscountsRow
            key={discounts.id}
            id={discounts.id}
            title={discounts.name}
            description={discounts.description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
