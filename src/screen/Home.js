import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import background from '../assets/backgroundImage.jpg';
import logo from '../assets/logo.png';


const Home = ({navigation}) => {
  return(
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignContent: 'center', flexDirection: 'column', }}>

      <ImageBackground source={background} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -10}} resizeMode='cover' />
      <View style={{ position: "absolute", top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0, 0.08)', zIndex: -5}} ></View>

      <Image source={logo} style={{ width: 200, height: 200, alignSelf: 'center', top: -180}} />
      
      <Button mode='contained' style={styles.button} labelStyle={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }} onPress={() => navigation.navigate('Caregiver')} >Se connecter en tant qu'aidant</Button>
      <Button mode='contained' style={styles.button} labelStyle={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }} onPress={() => navigation.navigate('Company')}>Se connecter en tant que structure</Button>
      <Button mode='contained' style={styles.button} labelStyle={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }} onPress={() => navigation.navigate('Family')}>Se connecter en tant que famille</Button>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  button: {
    marginVertical: 5,
    marginHorizontal: 15,
  }

});

export default Home;