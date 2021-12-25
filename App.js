import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Login  from "./screens/Login";
import Tabs from "./navigation/tabs";
import Home from "./screens/Home"
import BookDetail  from "./screens/BookDetail";
import  {Provider, useSelector}  from "react-redux";
import {store} from './redux/store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};
let userDetails=true ;
const Stack = createStackNavigator();


const App = () => {
  
  return (
    <Provider store={store}>
     
      <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Login"}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="MainScreen" component={Tabs} />
            <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
          </Stack.Navigator>
      </NavigationContainer>
  </Provider>
  );
};

export default App;
