import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

// * Estudo sobre useState

function App() {
  const [nome, setNome] = useState('Léo Lourenço');
  const [idade, setIdade] = useState(20);

  let entrar = (nome, idade) => {
    setNome(nome);
    setIdade(idade);
  };

  return (
    <View style={{marginTop: 25, marginLeft: 25, marginRight: 25}}>
      <Button title="Mudar nome:" onPress={() => entrar('Ana Clara', 9)} />
      <Text style={{fontSize: 19, marginTop: 20, alignSelf: 'center'}}>
        Nome: {nome}
      </Text>
      <Text style={{fontSize: 17, marginTop: 20, alignSelf: 'center'}}>
        Idade: {idade}
      </Text>
    </View>
  );
}

export default App;
