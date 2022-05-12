import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodayVisits from '../screen/Caregiver/TodayVisits';
import BasicScreen from '../templates/BasicScreen';
import VisitResume from '../screen/Caregiver/VisitResume';
import EndVisit from '../screen/Caregiver/EndVisit';

const Stack = createNativeStackNavigator();

const CaregiverRoutes = () => {

  return(
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="DailyVisits">
      <Stack.Screen name="DailyVisits" component={TodayVisits}/>
      <Stack.Screen name="MapView" component={BasicScreen}/>
      <Stack.Screen name="VisitsProgressing" component={VisitResume}/>
      <Stack.Screen name="VisitsResume" component={EndVisit}/>
    </Stack.Navigator>
  );

}

export default CaregiverRoutes;