import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GetStarted, Login, SignUp, VerificationCode, BirthdayChose, Home, Tasks, Inbox, Profiles, LeisureCourse, Photography, CoursesAttendance ,ClassSessionList,ReportAttendance} from './../screens/index'
function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BirthdayChose"
          component={BirthdayChose}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profiles"
          component={Profiles}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="LeisureCourse"
          component={LeisureCourse}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Photography"
          component={Photography}
          options={{ headerShown: false }}
        /> */}
          {/* <Stack.Screen
          name="CoursesAttendance"
          component={CoursesAttendance}
          options={{ headerShown: false }}
        /> */}
             {/* <Stack.Screen
          name="ClassSessionList"
          component={ClassSessionList}
          options={{ headerShown: false }}
        /> */}
         <Stack.Screen
          name="ReportAttendance"
          component={ReportAttendance}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;