import React from 'react';
import {View, Text} from 'react-native';

// * Estudo sobre alinhamento utilizando valores fixos e variáveis com flex

function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}>
      <View style={{width: 50, backgroundColor: '#121212'}}></View>

      <View style={{width: 50, backgroundColor: 'red'}}></View>

      <View style={{width: 50, backgroundColor: 'green'}}></View>
    </View>
  );
}

export default App;
