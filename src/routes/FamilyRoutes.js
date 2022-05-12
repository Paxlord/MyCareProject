import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodayVisits from '../screen/Caregiver/TodayVisits';
import BasicScreen from '../templates/BasicScreen';
import VisitResume from '../screen/VisitResumeNotModifiable';
import EndVisit from '../screen/Caregiver/EndVisit';

import MyPatient from '../screen/Family/MyPatient';
import PatientVisits from '../screen/Family/PatientVisits';

const Stack = createNativeStackNavigator();

const FamilyRoutes = () => {

  return(
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MyPatient">
      <Stack.Screen name="MyPatient" component={MyPatient}/>
      <Stack.Screen name="PatientVisits" component={PatientVisits}/>
      <Stack.Screen name="VisitDetail" component={VisitResume}/>
    </Stack.Navigator>
  );

}

export default FamilyRoutes;