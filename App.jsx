import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';

// Add the icons to the library
library.add(fas, far);

const Tab = createBottomTabNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({

          header: ({ navigation, route, options }) => {
            let title = options.tabBarLabel || 'Default Title';
            return (
              <View style={{backgroundColor:"white"}}>
                <Text>
                  {title}
                </Text>
              </View>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconcolor;
            if (route.name === 'Home') {
              iconName = ['fas', 'house' ];
              iconcolor=focused?'tomato':'gray';
            } else if (route.name === 'Account') {
              iconName =  ['fas', 'user'];
              iconcolor=focused?'tomato':'gray';
            }
            return <FontAwesomeIcon icon={iconName} color={iconcolor}  />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home"  component={HomeScreen} options={{ tabBarLabel:"หน้าแรก" }} />
        <Tab.Screen name="Account"  component={AccountScreen} options={{ tabBarLabel:"บัญชี" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
