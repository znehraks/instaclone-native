import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CreateAccount from "../screens/CreateAccount";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
