import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/Homescreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingScreen from "./screens/PreparingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Basket" component={BasketScreen}
        options={{presentation: 'modal', headerShown: false}} />
        <Stack.Screen name="Preparing" options={{presentation: 'fullScreenModal', headerShown: false}} component={PreparingScreen} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
