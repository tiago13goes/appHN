import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;


// import { StyleSheet, View } from 'react-native';
// import { Button, Input, Text } from 'react-native-elements';
// import { useState } from 'react';
// import { styles } from './src/styles';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Login from './screens/Auth/LoginScreen';
// import Cadastrar from './screens/Auth/Cadastrar';

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//       <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
//       <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );

// }