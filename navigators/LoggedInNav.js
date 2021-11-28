import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import TabIcon from "../components/nav/TabIcon";
import SharedStackNav from "./SharedStackNav";
import useMe from "../hooks/useMe";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  const { data } = useMe();
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
          tabBarIcon: ({ focused, color, size }) =>
            data?.me?.avatar ? (
              <Image
                source={{ uri: data?.me?.avatar }}
                style={{
                  height: 23,
                  width: 23,
                  borderRadius: 11.5,
                  ...(focused && { borderColor: "white", borderWidth: 2 }),
                }}
              />
            ) : (
              <TabIcon focused={focused} iconName={"person"} color={color} />
            ),
        }}
      >
        {() => <SharedStackNav screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
