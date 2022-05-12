import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import visits from '../../data/visits';
import moment from 'moment';


const GenerateMarkDates = () => {
  let markedDatesArray = [];

  visits.forEach((visit) => {

    markedDatesArray.forEach((markedDate) => {
      if(moment(markedDate).isSame(moment(visit.data))){
        return;
      }
    });

    markedDatesArray.push(moment(visit.date).format('YYYY-MM-DD'));
  });
}

const BasicScreen = ({navigation}) => {
  

  const [markedDates, setMarkDates] = useState(GenerateMarkDates());

  

  return(
    <SafeAreaView style={{ flex: 1}}>
       <Appbar.Header style={{ alignItems: 'center'}}>
        <Appbar.Content title="Mon Calendrier" titleStyle={{ textTransform: 'uppercase', color: 'white'}}/>
      </Appbar.Header>

      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 5 }}>
        <Calendar style={{ borderRadius: 5 }}  onDayPress={(date) => navigation.navigate("VisitsThisDay", { currentDate: moment(date).subtract(1, 'M').format('YYYY-MM-DD')})} markedDates={{ "2022-03-03": { selected: true, selectedColor: '#4DA29E', selectedTextColor: 'white' }}} />
      </View>
    </SafeAreaView>
  );
}

export default BasicScreen;