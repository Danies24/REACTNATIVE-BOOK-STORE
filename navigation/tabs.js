import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Bookmark, Profile, EditProfile } from "../screens/";
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: "10%",
    backgroundColor: COLORS.black,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case "Bookmark":
              return (
                <Image
                  source={icons.bookmark_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case "Profile":
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case "EditProfile":
              return (
                <Image
                  source={icons.plus_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="EditProfile" component={EditProfile} />
    </Tab.Navigator>
  );
};

export default Tabs;
