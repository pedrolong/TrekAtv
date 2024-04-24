import { NavigationContainer } from "@react-navigation/native";
import Iporanga from "./src/pages/Iporanga";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import { ImageBackground, useColorScheme } from "react-native";
const Stack = createNativeStackNavigator();
import Holambra from "./src/pages/Holambra";
import Ilhabela from "./src/pages/Ilhabela";
import Analândia from "./src/pages/Analâlandia";
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Analândia"
          component={Analândia}
          options={{
            headerTintColor: "black",
            headerStyle: { backgroundColor: "#2A6A8E" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
