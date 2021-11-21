import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import TabIcon from "../components/nav/TabIcon";
import SharedStackNav from "./SharedStackNav";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "rgba(255,255,255,0.3)",
        },
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="FeedScreen"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} iconName={"home"} color={color} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Feed" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="SearchScreen"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} iconName={"search"} color={color} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Search" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="CameraScreen"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} iconName={"camera"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="NotificationsScreen"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} iconName={"heart"} color={color} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Notifications" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="MeScreen"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} iconName={"person"} color={color} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
