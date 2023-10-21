import { View, Text, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import RenderFilteredResults from '../components/ui/RenderFilteredResults';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const fetchData = async () => {
    const baseUrl = 'http://192.168.1.28:3000';

    const endpoints = ['featured', 'discounts', 'offers'];
    const allRestaurants = [];

    for (const endpoint of endpoints) {
      try {
        const response = await axios.get(`${baseUrl}/${endpoint}`);
        allRestaurants.push(...response.data[0].restaurants);
      } catch (error) {
        console.error(`Error fetching data for endpoint ${endpoint}:`, error);
      }
    }

    return allRestaurants;
  };

  useEffect(() => {
    if (searchText) {
      setLoading(true);
      fetchData()
        .then((data) => {
          // Filter all restaurants based on the search text
          const filteredRestaurants = data.filter((restaurant) =>
            restaurant.title.toLowerCase().includes(searchText.toLowerCase())
          );

          setFilteredRestaurants(filteredRestaurants);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setFilteredRestaurants([]);
    }
  }, [searchText]);

  return (
    <SafeAreaView>
      <View className="flex-row items-center space-x-4 pb-2 mx-6">
        <View className="flex-row flex-1 justify-center space-x-2 bg-transparent p-3 items-center">
          <MagnifyingGlassIcon color="orange" />
          <TextInput
            className="bg-white w-9/12 rounded p-2 z-5"
            placeholder="Food and Cuisines"
            keyboardType="default"
            onChangeText={(text) => setSearchText(text)}
            ref={inputRef}
          >
          </TextInput>
          <View className="flex w-4">
          {loading ? (
            <ActivityIndicator size="small" color="orange"/>
          ): <></>}
          </View>
        </View>
      </View>
      {loading ? ( <></>
      ) : (
        <RenderFilteredResults data={filteredRestaurants} />
      )}
      {filteredRestaurants.length === 0 && !loading && (
        <Text className="text-center text-lg">No results found</Text>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
