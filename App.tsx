import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Onboarding } from './src/Authentication'
import { LoadAssets } from './src/components';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator()
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}
    // missing the header prop here
    >
      <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
    </AuthenticationStack.Navigator>
  )
}

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  )
}
