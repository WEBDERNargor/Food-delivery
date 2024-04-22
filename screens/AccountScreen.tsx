import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the params of your stack navigator if you have parameters to pass around
type RootStackParamList = {
  Home: undefined;  // Adjust according to your actual navigation structure
};

// Define prop types for this screen
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Accountscreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Home"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>Accountscreen</Text>
    </View>
  );
}

export default Accountscreen;
