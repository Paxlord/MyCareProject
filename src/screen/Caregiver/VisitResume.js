import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Headline, Caption, Button, Checkbox } from 'react-native-paper';
import dummyVisits from '../../data/visits';


const PatientInfoPanel = ({patient}) => {

  const { firstName, lastName, address, age, phoneNumber } = patient;

  return(
    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginHorizontal: 16 }}>
      <View style={{ flexGrow: 1, flexShrink: 0, marginLeft: 8, height: "70%"}}>
        <Headline style={{ fontWeight: "bold", color: '#4DA29E'}}>{`${firstName} ${lastName}`}</Headline>
        <Caption>{address}</Caption>
        <Caption style={{  color: '#2F4E49', paddingHorizontal: 3, borderRadius: 5,}}>{phoneNumber}</Caption>
      </View>
    </View>
  );
}

const VisitInfoPanel = ({visit, status}) => {

  const { tasks } = visit;
  const [ localTasks, setLocalTasks ] = useState(tasks);

  const CheckTasks = (index) => {
    
    if(status === 1){
      let tempTasks = [...localTasks];
      tempTasks[index].check = !tempTasks[index].check;

      setLocalTasks(tempTasks);
      dummyVisits.filter((visit) => visit.id === visit.id)[0].tasks = tempTasks;
    }

  }

  const statusToLabel = () => {
    switch(status){
      case 0:
        return 'Pas encore démarré';
      case 1:
        return 'En cours';
      case 2: 
        return 'Terminé';
    }
  }

  const StatusToColor = () => {
    switch(status){
      case 0:
        return '#2F4E49';
      case 1:
        return '#ffb300';
      case 2: 
        return '#4FB748';
    }
  }

  const StatusToBorderColor = () => {
    switch(status){
      case 0:
        return 'rgba(77, 162, 158, 0.6)';
      case 1:
        return 'rgba(242, 191, 74, 0.2)';
      case 2: 
        return 'rgba(117, 246, 110, 0.2)';
    }
  }

  return(
    <View style={{ flex: 8, paddingVertical: 8}}>
      <Headline style={{ alignSelf: 'center', color: StatusToColor(), fontWeight: 'bold', textTransform: 'uppercase', backgroundColor: StatusToBorderColor(), padding: 8, borderRadius: 5 }}>{statusToLabel()}</Headline>
      <ScrollView style={{ flex: 1, marginVertical: 15 }}>
        {localTasks.map((task, index) => <Checkbox.Item label={task.label} style={{ backgroundColor: 'white', marginVertical: 5, marginHorizontal: 5, borderRadius: 5, elevation: 2 }} status={task.check?"checked":"unchecked"} disabled={status == 1?false:true} onPress={() => CheckTasks(index)} color="#4DA29E"/>)}
      </ScrollView>
    </View>
  );

}


const VisitResume = ({route, navigation}) => {

  const { visitId } = route.params;

  const [visitDetail, setVisitDetail] = useState(dummyVisits.filter((visit) => visit.id === visitId)[0]);
  const [visitStatus, setVisitStatus ] = useState(dummyVisits.filter((visit) => visit.id === visitId)[0].statut);
  const [visitTasks, setVisitTasks] = useState(dummyVisits.filter((visit) => visit.id === visitId)[0].tasks)

  const updateStatus = (newStatus) => {
    
    dummyVisits.filter((visit) => visit.id === visitId)[0].statut = newStatus;
    setVisitDetail(dummyVisits.filter((visit) => visit.id === visitId)[0]);
    setVisitStatus(newStatus);

  }

  useEffect(() => {

    console.log("Changed");

  }, [visitDetail]);

  const DynamicButton = () => {
    switch(visitStatus){
      case 0:
        return <Button onPress={() => updateStatus(1)} mode='contained' labelStyle={{ color: 'white' }} style={{ marginHorizontal: 15}} >Démarrer le rendez-vous</Button>
      case 1: 
        return <Button onPress={() => updateStatus(2)} mode='contained' labelStyle={{ color: 'white' }} style={{ marginHorizontal: 15}}>Terminer le rendez-vous</Button>
      case 2: 
        return <Button onPress={() => navigation.navigate("VisitsResume", {visitId: visitId})} mode='contained' labelStyle={{ color: 'white' }} style={{ marginHorizontal: 15}}>Laisser un résumé</Button>
    }
  }

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <PatientInfoPanel patient={visitDetail.patient} />
      <VisitInfoPanel visit={visitDetail} status={visitStatus} />
      <View style={{ flex: 1}}>
        {DynamicButton()}
      </View>
    </SafeAreaView>
  );
}

export default VisitResume;