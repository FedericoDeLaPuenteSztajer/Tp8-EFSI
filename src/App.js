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
const RIGHT_USER = {
  username: "josuke",
  password: "1234"
} // usuario harcodeado

function AuthStack(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: () => null, // Oculta el texto de la pestaña
        headerShown: false, // El encabezado no se muestra en el TabNavigator
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false, // Importante
      })}
    >
      <Tab.Screen name="Login">
        {(props) => <LoginScreen login={props.login} userTry={props.userTry} setUserTry={props.setUserTry} />}
      </Tab.Screen>
      <Tab.Screen name="SignUp">
        {(props) => <SignUpScreen signUp={props.signUp} userTry={props.userTry} setUserTry={props.setUserTry} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: () => null, // Oculta el texto de la pestaña
        headerShown: false, // El encabezado no se muestra en el TabNavigator
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false, // Importante
      })}>
      <Tab.Screen name="Home">
        {<HomeScreen />}
      </Tab.Screen>
      <Tab.Screen name="Feed">
        {<FeedScreen />}
      </Tab.Screen>
      <Tab.Screen name="Perfil">
        {<ProfileScreen />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

const App = () => {

  // UseState
  const [userTry, setUserTry] = useState({
    username: "username",
    password: "password"
  });
  const [account, setAccount] = useState(null);
  const [logFailed, setLogFailed] = useState(false);

  // UseEffect
  const login = () => {
    // Compara si los datos son correctos
    if (userTry === RIGHT_USER) {
      account = RIGHT_USER;
    } else {
      setLogFailed = true;
    }
  }

  const signUp = () => {
    // Se sobreescriben los datos
    account = userTry;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{
        padding: 15,
        flexDirection: 'column',
      }}>
        <NavigationContainer>
          {(account) ?
            (<AppStack />) :
            (!logFailed) ?
              (<AuthStack login={login} signUp={signUp} userTry={userTry} setUserTry={setUserTry} />) :
              (<LoginErrorScreen setLogFailed={setLogFailed} />)
          }
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;