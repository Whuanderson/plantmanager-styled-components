import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Confirmation } from "../pages/Confirmation";
import { Home } from "../pages/Home";
import { IdentificationScreen } from "../pages/IdentificationScreen";
import { PlantSelect } from "../pages/PlantSelect";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ cardStyle: { backgroundColor: theme.colors.white }, headerShown:false }} >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Confirmation"
        component={Confirmation}
      />
      <Screen
        name="IdentificationScreen"
        component={IdentificationScreen}
      />
      <Screen
        name="PlantSelect"
        component={PlantSelect}
      />
    </Navigator>
  )
}
