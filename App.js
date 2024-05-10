import { NavigationContainer } from "@react-navigation/native";
import Iporanga from "./src/pages/Iporanga";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";

const Stack = createNativeStackNavigator();
import Holambra from "./src/pages/Holambra";
import Ilhabela from "./src/pages/Ilhabela";
import Analândia from "./src/pages/Analândia";
import Pacotes from "./src/pages/Pacotes";

import MapScreen from "./src/pages/maps";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mapa">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Analândia"
          component={Analândia}
          options={{
            headerTintColor: "black",
            headerStyle: { backgroundColor: "white" },
          }}
        />
        <Stack.Screen
          name="Iporanga"
          component={Iporanga}
          options={{
            headerTintColor: "black",
            headerStyle: { backgroundColor: "white" },
          }}
        />
        <Stack.Screen
          name="Ilhabela"
          component={Ilhabela}
          options={{
            headerTintColor: "black",
            headerStyle: { backgroundColor: "white" },
          }}
        />
        <Stack.Screen
          name="Holambra"
          component={Holambra}
          options={{
            headerTintColor: "black",
            headerStyle: { backgroundColor: "white" },
          }}
        />
        <Stack.Screen name="Pacotes" component={Pacotes} />
        <Stack.Screen name="Mapa" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
