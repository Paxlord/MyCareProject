import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CaregiverRoutes from './CaregiverRoutes';

import Home from '../screen/Home';
import CompanyRoutes from './CompanyRoutes';
import FamilyRoutes from './FamilyRoutes';

const Stack = createNativeStackNavigator();

const Routes = () => {

  return(

    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Caregiver" component={CaregiverRoutes} />
      <Stack.Screen name="Company" component={CompanyRoutes} />
      <Stack.Screen name="Family" component={FamilyRoutes} />
    </Stack.Navigator>

  );

}

export default Routes;