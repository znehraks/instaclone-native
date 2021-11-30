import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function UploadNav() {
  return (
    <Tab.Navigator
      showPageIndicator="true"
      tabBarPosition="bottom"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarItemStyle: { backgroundColor: "black" },
        tabBarIndicatorStyle: {
          backgroundColor: "red",
          top: 0,
        },
      }}
      style={{ backgroundColor: "black" }}
    >
      <Tab.Screen name="Select">
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "white",
              headerBackTitleVisible: false,
              headerBackImage: ({ tintColor }) => (
                <Ionicons color={tintColor} name="close" size={28} />
              ),
              headerStyle: {
                backgroundColor: "black",
                shadowOpacity: 0.2,
              },
            }}
          >
            <Stack.Screen
              name="SelectScreen"
              component={SelectPhoto}
              options={{ title: "Choose a Photo" }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
}
