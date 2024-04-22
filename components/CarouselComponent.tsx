import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions,SafeAreaView  } from 'react-native';


interface ImageOverlayProps {
    item: {
      illustration: string;
      title : string;
    };
  }

const ImageOverlay: React.FC<ImageOverlayProps> = ({ item }) => {
    return (
      <SafeAreaView style={stylesoveray.container}>
      
        <View style={stylesoveray.constainerimage}>
      <Image
        source={{ uri: item.illustration }}
        style={stylesoveray.image}
        resizeMode="cover" // Cover, contain, stretch, repeat, center
      />
        </View>

    
        <View style={stylesoveray.overlay}>
          <Text style={stylesoveray.text}>{item.title}</Text>
        </View>
      </SafeAreaView>
    );
  };
  const stylesoveray = StyleSheet.create({
    container: {
      width: 120,
      height: 100,
      position: 'relative',
      marginLeft:5,
      marginRight:5,
      borderRadius:10,
      overflow: 'hidden',
      backgroundColor:"white",
      shadowColor:"#000",
      shadowOffset:{
        width:0,
        height:4
      },
      shadowOpacity:0.50,
      shadowRadius:4.65,
      elevation:8
    },
    constainerimage:{
      
        width: '100%',  // Increase the width of the image
        height: '100%',
        position: 'absolute',
        right: -30,
        bottom:-30,
       
    },
    image:{
        width: '80%',  // Increase the width of the image
        height: '95%',
       borderRadius:100
    },
    overlay: {
      position: 'absolute',
      top: 5,
      left: 5,
      
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10
    },
    text: {
      
      fontSize: 17,
      fontWeight: 'bold',
    },
  });

interface CarouselItem {
  title: string;
  illustration: string;
}

interface CarouselComponentProps {
  items: CarouselItem[];  // Expected to receive an array of CarouselItem
}

const { width: screenWidth } = Dimensions.get('window'); // Get the screen width

const CarouselComponent: React.FC<CarouselComponentProps> = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ImageOverlay item={item} />}
      keyExtractor={item => item.illustration}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={screenWidth * 0.8 + 10} // Adjust the snap interval
      pagingEnabled
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    backgroundColor: 'floralwhite',
  },
  listContainer: {
    alignItems: 'center'
  },
  page: {
    width: screenWidth * 0.8, // Each item takes 80% of the screen width
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 5,
    backgroundColor: '#fff', // Background color for each carousel item
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CarouselComponent;
