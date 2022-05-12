import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


const BasicScreen = () => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={{ alignItems: 'center'}}>
        <Appbar.Content title="BasicScreen" style={{ textAlign: 'center'}} />
      </Appbar.Header>
    </SafeAreaView>
  );
}

export default BasicScreen;