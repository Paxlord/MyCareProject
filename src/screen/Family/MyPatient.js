import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Appbar, List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import visits from '../../data/visits';
import moment from 'moment';

const dummyPatient = [{
  lastName: "Vignot",
  firstName: "Louise",
  address: "17 avenue des champs élysées, 75015 Paris",
  phoneNumber: "0785954210",
  age: 81,
  photoUrl : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.123rf.com%2Fphoto_18346833_senior-portrait-gens-heureux-vieille-femme-souriante-et-regardant-la-cam%25C3%25A9ra.html&psig=AOvVaw2w0hM98Nt8NSGgF-yn1EJG&ust=1646387874944000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCD6f3WqfYCFQAAAAAdAAAAABAD',
}];

const GetLastVisitsFromList = (visits) => {

  let momentVisit = moment(visits[0].date);

  visits.forEach((visit) => {if(moment(visit.date).isAfter(momentVisit)){momentVisit = moment(visit.date)}})

  return momentVisit.format("DD/MM/YYYY");

}

const BasicScreen = ({navigation}) => {

  const patientVisits = visits.filter((visit) => visit.patient.lastName === dummyPatient[0].lastName);

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={{ alignItems: 'center'}}>
        <Appbar.Content title="Mes aidés" style={{ textAlign: 'center'}}  titleStyle={{ textTransform: 'uppercase', color: 'white'}}/>
      </Appbar.Header>

      <ScrollView style={{ flex: 1 }}>
        { dummyPatient.map((patient) => <PatientListItem patient={patient} lastVisit={GetLastVisitsFromList(patientVisits)} handlePress={() => navigation.navigate('PatientVisits', { patient: patient })}/>) }
      </ScrollView>
    </SafeAreaView>
  );
}

const PatientListItem = ({patient, lastVisit, handlePress}) => {

  const {lastName, firstName} = patient;


  return(
    <List.Item 
      title={`${lastName} ${firstName}`}
      description={`Dernière visite : ${lastVisit}`}
      onPress={handlePress}
      titleStyle={{ fontWeight: 'bold' }}
      style={{ elevation: 5, backgroundColor: 'white', margin: 8, borderRadius: 5 }}
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