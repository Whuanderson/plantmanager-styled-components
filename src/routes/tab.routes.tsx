import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { theme } from "../global/styles/theme";
import { PlantSelect } from "../pages/PlantSelect";
import { MaterialIcons } from "@expo/vector-icons";
import { MyPlants } from "../pages/MyPlants";

const Apptab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <Apptab.Navigator    
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        return <MaterialIcons size={size} color={color} />;
      },
      tabBarActiveTintColor: `${theme.colors.green}`,
      tabBarInactiveTintColor: `${theme.colors.heading}`,
    })}
    >
      <Apptab.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <Apptab.Screen
        name="Minhas Planta"
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Apptab.Navigator>
  )
}

export default AuthRoutes;