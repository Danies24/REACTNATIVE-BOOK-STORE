import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Login  from "./screens/Login";
import Tabs from "./navigation/tabs";
import BookDetail  from "./screens/BookDetail";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Login"}>

         
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="MainScreen" component={Tabs} />
          <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />

        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
