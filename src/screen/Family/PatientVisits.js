import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';

import visits from '../../data/visits';


const BasicScreen = ({route, navigation}) => {

  const { patient } = route.params;
  const patientVisits = visits.filter((visit) => visit.patient.lastName === patient.lastName);

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={{ alignItems: 'center'}}>
        <Appbar.Content title={`Les visites de ${patient.lastName} ${patient.firstName}`} style={{ textAlign: 'center'}} titleStyle={{ textTransform: 'uppercase', color: 'white'}}/>
      </Appbar.Header>

      <View style={{ flex: 1 }}>
        {patientVisits.map((visit) => <VisitListItem visit={visit} handlePress={() => navigation.navigate('VisitDetail', { visitId: visit.id })}/>)}
      </View>
    </SafeAreaView>
  );
}

const VisitListItem = ({visit, handlePress}) => {

  const {patient, aide, statut, date, heure} = visit;

  const statusToColors = () => {
    switch(statut){
      case 0:
        return 'grey';
      case 1:
        return 'orange';
      case 2:
        return 'limegreen';
    }
  }

  return(
    <List.Item 
      title={`${aide.lastName} ${aide.firstName}`}
      description={`Le ${moment(date).format("DD MMMM YYYY")} à ${heure}`}
      onPress={handlePress}
      titleStyle={{ fontWeight: 'bold' }}
      style={{ elevation: 5, backgroundColor: 'white', margin: 5, borderRadius: 5 }}
    />
  );

}


const styles = StyleSheet.create({
  imageIcon: {
    width: 40,
    height: 40,
    borderRadius: 60,
    backgroundColor: "crimson",
    alignSelf: 'center'
  },
  centeredText: {
    alignSelf: 'center'
  }
});

export default BasicScreen;