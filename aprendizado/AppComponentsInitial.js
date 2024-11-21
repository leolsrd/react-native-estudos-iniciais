import {React} from 'react';
import {View, Text, Image} from 'react-native';

// * Estudo sobre componentes iniciais

function App() {
  return (
    <View>
      <Text>Olá Mundo!!!</Text>
      <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
        Meu Primeiro App
      </Text>
      <Text style={{fontSize: 18, color: 'green'}}>Sujeito Programador</Text>

      <Logo largura={350} altura={350} nome={'Léo Lourenço'} />
    </View>
  );
}

export default App;

function Logo(props) {
  let img = 'https://sujeitoprogramador.com/reactlogo.png';

  return (
    <View>
      <Image
        source={{uri: img}}
        style={{width: props.largura, height: props.altura}}
      />
      <Text>{props.nome}</Text>
    </View>
  );
}
