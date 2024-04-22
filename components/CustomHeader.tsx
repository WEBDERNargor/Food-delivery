import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add icons to the library
library.add(fas, far);

// Define the props expected by CustomHeader using an interface
interface CustomHeaderProps {
  title: string;          // Assuming title is a string
  toggleDrawer: () => void;  // toggleDrawer should be a function that returns void
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, toggleDrawer }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={toggleDrawer} style={{ paddingHorizontal: 10 }}>
        <FontAwesomeIcon icon={['fas', 'bars-staggered'] as [any, IconName]} />
      </TouchableOpacity>
      <FontAwesomeIcon icon={['fas', 'location-dot'] as [any, IconName]} />
      <Text>ร้านตุ้มตุ้ย</Text>
      <FontAwesomeIcon icon={['fas', 'caret-down'] as [any, IconName]} />
      <FontAwesomeIcon icon={['fas', 'user'] as [any, IconName]} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default CustomHeader;
