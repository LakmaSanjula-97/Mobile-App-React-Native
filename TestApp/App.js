// import { StatusBar } from 'expo-status-bar';
// import SignInScreen from './screens/SignInScreen';
// import { NavigationContainer } from '@react-navigation/native'; 
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignUpScreen from './screens/SignUpScreen';
// import ResetPassword from './screens/ResetPassword';
// import Home from './screens/Home';
// import ManageAccount from './screens/ManageAccount';
// import CharacterDetail from './screens/CharacterDetail';

// const Stack = createNativeStackNavigator();

// export default function App() {
  
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="SignInScreen" 
//           component={SignInScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="SignUpScreen" 
//           component={SignUpScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="ResetPassword" 
//           component={ResetPassword}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Home" 
//           component={Home}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="ManageAccount" 
//           component={ManageAccount}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="CharacterDetail" 
//           component={CharacterDetail}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ResetPassword from "./screens/ResetPassword";
import Home from "./screens/Home";
import ManageAccount from "./screens/ManageAccount";
import CharacterDetail from "./screens/CharacterDetail";
import SplashScreenComponent from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setSplashReady(true);
    };

    prepare();
  }, []);

  if (!isSplashReady) {
    return <SplashScreenComponent />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageAccount"
          component={ManageAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

