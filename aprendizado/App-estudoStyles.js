import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.area}>
      <Text style={styles.tituloPrincipal}>Estilos CSS</Text>
      <Text style={styles.titulo}>Nome: "Léo Lourenço"</Text>
      <Text style={styles.titulo}>Idade: 41</Text>
    </View>
  );
}

// * Aprendizado sobre como aplicar estilo CSS nos componentes
const styles = StyleSheet.create({
  area: {
    marginLeft: 20,
    marginTop: 25,
    marginRight: 20,
    marginBottom: 25,
  },
  tituloPrincipal: {
    fontSize: 25,
    marginBottom: 8,
  },
  titulo: {
    fontSize: 15,
    color: '#010101',
  },
});

export default App;
