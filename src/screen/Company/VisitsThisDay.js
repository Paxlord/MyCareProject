import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Appbar, List, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
import visits from '../../data/visits';


const VisitListItem = ({visit, handlePress}) => {

  const {patient, aide, statut, heure} = visit;

  const StatusToColor = () => {
    switch(statut){
      case 0:
        return '#2F4E49';
      case 1:
        return '#ffb300';
      case 2: 
        return '#4FB748';
    }
  }

  return(
    <List.Item 
      right={props => <View {...props} style={{ width: 20, height: 20, backgroundColor: StatusToColor(), borderRadius: 50, alignSelf: 'center' }}></View>}
      title={`${aide.lastName} ${aide.firstName}`}
      description={`Patient : ${patient.lastName} ${patient.firstName}, ${heure}`}
      onPress={handlePress}
      titleStyle={{ fontWeight: 'bold' }}
      style={{ elevation: 5, backgroundColor: 'white', margin: 5, borderRadius: 5 }}
    />
  );

}

const VisitsThisDay = ({route, navigation}) => {
  
  const { currentDate } = route.params;
  const [ visitsThisDay, setVisits] = useState(visits.filter((visit) => moment(visit.date).isSame(moment(currentDate), "D")))

  const handlePress = (visitId) => {
    navigation.navigate("VisitsDetail", {visitId: visitId})
  }

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={{ alignItems: 'center'}}>
        <Appbar.Content title={`les visites du ${moment(currentDate).format("DD/MM/YYYY")}`} titleStyle={{ textTransform: 'uppercase', color: 'white'}}/>
      </Appbar.Header>

      <ScrollView style={{ flex: 1}}>
        {visitsThisDay.map((visit) => <VisitListItem visit={visit} handlePress={() => handlePress(visit.id)}/>)}
      </ScrollView>
    </SafeAreaView>
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

export default VisitsThisDay;