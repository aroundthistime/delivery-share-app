/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import LoggedInNavigation from './src/navigators/LoggedInNavigation';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <LoggedInNavigation />
    </NavigationContainer>
  )
}


export default App;
