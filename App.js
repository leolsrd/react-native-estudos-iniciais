import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  // Button,
  TouchableOpacity,
} from 'react-native';

// * Estudos utilizando Styles, componentes iniciais, flex e useState

function App() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  function entrar() {
    if (input === '') {
      alert('Digite seu nome!');
      return;
    }

    setNome(`Bem vindo: ${input}`);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={text => setInput(text)}
      />

      {/* <Button style={styles.button} title="Entrar" onPress={entrar} /> */}

      <TouchableOpacity style={styles.button} onPress={entrar}>
        <Text style={styles.textoButton}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
    margin: 16,
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4d8bff',
    margin: 20,
    flex: 1 / 16,
    alignSelf: 'center',
    padding: 12,
    width: 200,
  },
  textoButton: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default App;
