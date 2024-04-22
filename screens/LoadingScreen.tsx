import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the params of your stack navigator
type RootStackParamList = {
    Drawer: undefined;
    Main: undefined;  // Assuming 'Main' is a valid route, adjust according to your actual navigation structure
};

// Define prop types for this screen
type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Main'>;
};

const LoadingScreen: React.FC<Props> = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Drawer', state: { routes: [{ name: 'Main', params: { screen: 'Home' } }] } }],
            });
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../img/android-chrome-512x512.png')}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4F5AB",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 200,
    }
});

export default LoadingScreen;
