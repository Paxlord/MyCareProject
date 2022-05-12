import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, List } from 'react-native-paper';
import dummyVisits from '../../data/visits';


const TodayVisits = ({navigation}) => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={{ alignItems: 'center'}}>
        <Appbar.Content title="Mes visites aujourd'hui" titleStyle={{ textTransform: 'uppercase', color: 'white'}} />
      </Appbar.Header>

      <ScrollView style={{ flex: 1, margin: 8 }}>
        {dummyVisits.map((visit) => <VisitListItem key={visit.id} visit={visit} handlePress={() => navigation.navigate("VisitsProgressing", {visitId: visit.id})} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const VisitListItem = ({visit, handlePress}) => {

  const {patient, heure} = visit;

  return(
    <List.Item 
      right={props => <Text {...props} style={styles.centeredText}>{heure}</Text>}
      title={`${patient.lastName} ${patient.firstName}`}
      description={`${patient.address}`}
      onPress={() => handlePress()}
      titleStyle={{ fontWeight: 'bold', }}
      style={{ elevation: 5, backgroundColor: 'white', margin: 5, borderRadius: 5 }}
    />
  );

}

const styles = StyleSheet.create({
  imageIcon: {
    width: 40,
    height: 40,
    borderRadius: 60,
    alignSelf: 'center'
  },
  centeredText: {
    alignSelf: 'center',
    backgroundColor: 'rgba(77, 162, 158, 0.6)',
    color: '#2F4E49',
    paddingHorizontal: 3,
    borderRadius: 5,
  }
});

export default TodayVisits;