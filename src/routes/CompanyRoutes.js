import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasicScreen from '../templates/BasicScreen';
import MyCalendar from '../screen/Company/MyCalendar';
import VisitsThisDay from '../screen/Company/VisitsThisDay';
import VisitResume from '../screen/VisitResumeNotModifiable';

const Stack = createNativeStackNavigator();

const CompanyRoutes = () => {

  return(
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MyCalendar">
      <Stack.Screen name="MyCalendar" component={MyCalendar}/>
      <Stack.Screen name="VisitsThisDay" component={VisitsThisDay}/>
      <Stack.Screen name="VisitsDetail" component={VisitResume} />
    </Stack.Navigator>
  );

}

export default CompanyRoutes;