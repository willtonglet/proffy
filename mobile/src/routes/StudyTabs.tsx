import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";

interface Button {
  color: string;
  size: number;
  focused: boolean;
}

function StudyTabs() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: (button: Button) => {
            return (
              <Ionicons
                name="ios-easel"
                size={button.size}
                color={button.focused ? "#8257e5" : button.color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: (button: Button) => {
            return (
              <Ionicons
                name="ios-heart"
                size={button.size}
                color={button.focused ? "#8257e5" : button.color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
