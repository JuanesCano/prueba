import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/HomeScreen";

import DetailScreen from "../Screen/DetailScreen";

const Stack = createNativeStackNavigator();
export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
