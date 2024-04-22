import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import LoadingScreen from './screens/LoadingScreen';
import CustomHeader from './components/CustomHeader';

// Add the icons to the library
library.add(fas, far);

type RootStackParamList = {
    Loading: undefined;
    Drawer: undefined;
};

type DrawerParamList = {
    Main: undefined;
    Home: undefined;
    Account: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === 'Home') {
            iconName = ['fas', 'house'];
          } else if (route.name === 'Account') {
            iconName = ['fas', 'user'];
          }
          return <FontAwesomeIcon icon={iconName} color={focused ? 'tomato' : 'gray'} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "หน้าแรก", headerTitle: "หน้าแรก",headerShown:false }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ tabBarLabel: "บัญชี", headerTitle: "บัญชี",headerShown:false }} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation, route }:any) => ({
        header: () => {
          const title = route.params?.title || route.name;
          return (
            <CustomHeader
              title={title}
              toggleDrawer={() => (navigation as DrawerNavigationProp<DrawerParamList>).toggleDrawer()}
            />
          );
        }
      })}
    >
      <Drawer.Screen name="Main" component={MainTabNavigator} options={{ drawerLabel: "Main", title: "Main Menu" }} />
      <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: "หน้าแรก", title: "Main Menu" }} />
      <Drawer.Screen name="Account" component={AccountScreen} options={{ drawerLabel: "บัญชี", title: "Main Menu" }} />
    </Drawer.Navigator>
  );
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
