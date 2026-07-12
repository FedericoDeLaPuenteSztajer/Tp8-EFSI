import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

// Import de screens
import HomeScreen from './screens/HomeScreen';
import FeedScreen from './screens/FeedScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginErrorScreen from './screens/LoginErrorScreen';

// Import de componentes
import BigPost from './components/BigPost';
import SmallPost from './components/SmallPost';

// Constraints
const Tab = createBottomTabNavigator();
const name = "josuke"; // usuario harcodeado
const password = "1234"; // usuario harcodeado



const App = () => {
  // UseState
  const [account, setAccount] = useState(null);

  // UseEffect
  const login = () => {
    // Si los datos son correctos
  }

  const signUp = () => {
    // Se sobreescriben los datos
  }

  return (<>
    {account ? (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Feed" component={FeedScreen} />
          <Tab.Screen name="Perfil" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="SignUp" component={SignUpScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )}
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;