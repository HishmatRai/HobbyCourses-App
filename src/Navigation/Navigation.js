import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GetStarted,LeisureCourse, } from './../screens/index'
function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
       {/* <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        /> */}
           <Stack.Screen
          name="LeisureCourse"
          component={LeisureCourse}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;