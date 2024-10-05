// screens/HomeScreen.js

import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Créer un compte Usager" onPress={() => navigation.navigate('UsagerForm')} />
      <Button title="Créer un compte Conducteur" onPress={() => navigation.navigate('ConducteurForm')} />
    </View>
  );
};

export default HomeScreen;
