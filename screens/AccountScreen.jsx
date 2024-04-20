import { View, Text,Button } from 'react-native'
import React, { useState,useEffect } from 'react'


const Accountscreen = ({navigation}) => {
   
  return (
    <View>
        <Button
  onPress={()=>{
    navigation.navigate('Home');
  }}
  title="Home"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      <Text>Accountscreen</Text>
    </View>
  )
}

export default Accountscreen