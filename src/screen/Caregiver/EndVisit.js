import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Appbar, Button, Subheading, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import visits from '../../data/visits';

const EndVisit = ({navigation, route}) => {

  const { visitId } = route.params;


  const [text, setText] = useState('');

  const updateText = (text) => {

    setText(text);
    let currentVisitsIndex = visits.findIndex((visit) => visit.id === visitId);
    console.log("currentVisitsIndex", currentVisitsIndex);

    if(currentVisitsIndex !== -1){
      
      visits[currentVisitsIndex]["endTextResume"] = text;
    }

    console.log(visits[currentVisitsIndex].endTextResume);

  }

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={{ alignItems: 'center'}}>
        <Appbar.Content title="Résumé de fin de visite" style={{ textAlign: 'center'}} titleStyle={{ textTransform: 'uppercase', color: 'white'}} />
      </Appbar.Header>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 8}}>
        <Button mode="contained" icon="radiobox-marked" style={{ paddingVertical: 5}} labelStyle={{ color: 'white' }}>Enregistrer un message vocal</Button>
        <Subheading style={{ paddingVertical: 5}}>Ou</Subheading>
        <TextInput label="Résumé" style={{ alignSelf: 'stretch'}} multiline={true} numberOfLines={8} value={text} onChangeText={updateText} />
      </View>

      <Button onPress={() => navigation.popToTop()} mode='contained' labelStyle={{ color:'white' }} style={{ marginHorizontal: 15, marginVertical: 10  }}>Terminer</Button>
    </SafeAreaView>
  );
}

export default EndVisit;