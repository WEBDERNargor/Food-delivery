import React,{useState} from 'react';
import { View, Text, SafeAreaView, ViewStyle,TextInput,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add icons to the library
library.add(fas, far);
import CarouselComponent from '../components/CarouselComponent';
import CarouselCard from '../components/CarouselCard';
// Define the type for the items in your carousel
interface CarouselItem {
  title: string;
  illustration: string;
}

interface Carditems {
  title: string;
  label:string;
  illustration: string;
}

// Define the array using the CarouselItem type
const conla: CarouselItem[] = [
  { title: 'มือเช้า',  illustration: 'https://fastly.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o' },
  { title: 'มือเที่ยง',  illustration: 'https://fastly.picsum.photos/id/295/200/200.jpg?hmac=nsWHMt5f11TALPFeS_0t6tIlO2CkViBNAbAbSlhu8P4' },
  { title: 'มือเย็น',  illustration: 'https://fastly.picsum.photos/id/635/200/200.jpg?hmac=Vm8Tavc31Qax01634w3MOPpNCCfasJG8wnBamSi87T4' },
];

const pop: Carditems[] = [
  { title: 'ปลาดทอด ร้าดพริกสามรส',label:'เจอ 16 ร้าน',  illustration: 'https://fastly.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o' },
  { title: 'ปลานึ่งมะนาว',label:'เจอ 16 ร้าน',  illustration: 'https://fastly.picsum.photos/id/295/200/200.jpg?hmac=nsWHMt5f11TALPFeS_0t6tIlO2CkViBNAbAbSlhu8P4' },
  { title: 'ข้าวผัดแซลมอน',label:'เจอ 16 ร้าน',  illustration: 'https://fastly.picsum.photos/id/635/200/200.jpg?hmac=Vm8Tavc31Qax01634w3MOPpNCCfasJG8wnBamSi87T4' },
];

const Homescreen: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  return (

     
      <ScrollView style={styles.container} >
        <SafeAreaView style={styles.flexible}>
          <View style={styles.body}>
    <View style={{marginBottom:20,marginTop:30}}>
    <Text style={{fontSize:16}}>Good morning,</Text>
    <Text style={{fontSize:24, fontWeight: 'bold'}}>ร้านตึ้ยยย</Text>
    </View>
    <View style={{width:"100%",justifyContent:"space-between",flexDirection:"row"}}>
    <TextInput
        style={styles.input}
        value={searchValue}
        onChangeText={setSearchValue} // Update the state when input changes
        placeholder="Enter something..." // Placeholder text
        keyboardType="default" // Keyboard type (e.g., 'number-pad', 'email-address')
        secureTextEntry={false} // Use true for password inputs
        autoFocus={false} // Automatically focus this input
      />
      <TouchableOpacity style={{width:"15%",height:40,backgroundColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
      <FontAwesomeIcon icon={['fas', 'sliders']} size={22} style={{width:"100%",height:"100%"}} />
      </TouchableOpacity>
    </View>


    <View style={{marginTop:25,flexDirection:"row",justifyContent:"space-between"}}>
    <Text style={{fontSize:20,fontWeight:"bold"}}>หมวดหมู่</Text>
    <TouchableOpacity>
      <Text>More</Text>
    </TouchableOpacity>
    </View>
        <View style={{height:130}}>
        <CarouselComponent items={conla} />
        </View>



        <View style={{marginTop:20,flexDirection:"row",justifyContent:"space-between"}}>
    <Text style={{fontSize:20,fontWeight:"bold"}}>ยอดนิยม</Text>
    <TouchableOpacity>
      <Text>More</Text>
    </TouchableOpacity>
    </View>
    <View style={{height:190}}>
        <CarouselCard items={pop} />
        </View>
        </View>
        </SafeAreaView>
       </ScrollView>
    
  
  )
}

// Define styles with TypeScript type



const styles = StyleSheet.create({
  container:{
    width:"100%",height:"100%"
  },
  flexible:{  height: "100%" ,width:"100%",alignItems:"center" },
  body:{
    height: "100%",
    width:"90%"
  },
  input: {
    width: '79%',
    height: 40,
   
    borderRadius:10,
    paddingHorizontal: 10,
    backgroundColor:"white"
  },
});

export default Homescreen;
