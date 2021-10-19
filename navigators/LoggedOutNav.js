import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CreateAccount from "../screens/CreateAccount";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={Welcome}
      ></Stack.Screen>
      <Stack.Screen
        name="Login"
        options={{
          headerTintColor: "red",
        }}
        component={Login}
      ></Stack.Screen>
      <Stack.Screen
        name="CreateAccount"
        options={{
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "white",
        }}
        component={CreateAccount}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
