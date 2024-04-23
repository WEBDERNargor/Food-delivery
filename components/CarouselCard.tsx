import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions,SafeAreaView  } from 'react-native';


interface ImageOverlayProps {
    item: {
      illustration: string;
      title : string;
      label:string;
    };

    index: any
  }

const ImageOverlayCard: React.FC<ImageOverlayProps> = ({ item,index }) => {
    return (
      index!=0?(
      <SafeAreaView style={cardstyle.card}>
        
        <View style={cardstyle.cardimagecontainer}>
       <Image
        source={{ uri: item.illustration }}
        style={cardstyle.cardimage}
        resizeMode="cover" // Cover, contain, stretch, repeat, center
      />
      </View>
      <View style={cardstyle.cardtextcontainer}>
      <Text style={cardstyle.cardtitle}>{item.title}</Text>
      <Text style={cardstyle.cardlabel}>{item.label}</Text>
      </View>
      </SafeAreaView>
    ):(
      <SafeAreaView style={cardstyle.card}>
        
      <View style={cardstyle.cardimagecontainer}>
     <Image
      source={{ uri: item.illustration }}
      style={cardstyle.cardimage}
      resizeMode="cover" // Cover, contain, stretch, repeat, center
    />
    </View>
    <View style={cardstyle.cardtextcontainer}>
      <Text style={cardstyle.cardtitle}>{item.title}</Text>
      <Text style={cardstyle.cardlabel}>{item.label}</Text>
    </View>
    </SafeAreaView>
    )
  )
  };
  const cardstyle=StyleSheet.create({
    card:{ 
      width: 165,
       height: 180,
       backgroundColor:"white",
       marginLeft:10,
       borderRadius:20,
       shadowColor: 'rgba(0, 0, 0, 0.52)', 
       shadowOffset: { width: -5, height: 4 }, 
       shadowOpacity: 0.52, 
       shadowRadius: 5, 
       elevation: 10, 
  },
    cardtextcontainer:{
      marginRight:10,
      marginLeft:10,
      flex:0.35,
      overflow: 'hidden',
     
    },
    cardimagecontainer:{
      flex:0.65,
      borderTopLeftRadius:20,
      borderTopRightRadius:20
    },
    cardimage:{
       width:"100%",
       height:"100%",
       borderTopLeftRadius:20,
       borderTopRightRadius:20
      },
    cardtitle:{
      fontSize:15,
      fontWeight:"bold"
      
    },
    cardlabel:{
      fontSize:12,
    }
  });

interface CarouselItem {
  title: string;
  illustration: string;
  label:string;
}

interface CarouselComponentProps {
  items: CarouselItem[];  // Expected to receive an array of CarouselItem
}

const { width: screenWidth } = Dimensions.get('window'); // Get the screen width

const CarouselCard: React.FC<CarouselComponentProps> = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item,index }) => <ImageOverlayCard item={item} index={index} />}
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

export default CarouselCard;
