import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { useState } from 'react';
import { styles } from '../src/styles';

export default function Login({navigation}) {
  
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)

  const entrar = () =>{
    console.log("entrou")
    console.log(email)
    console.log(senha)
  }

  const cadastrar = () =>{
    navigation.reset({
        index:0,
        routes: [{name: "Cadastrar"}]
    })
  }

  return (
    <View style={styles.container}>

      <Text h1 style = {styles.h1}>Hoje Não!</Text>

      <Input placeholder='Digite seu usuário'
        color = 'white'
        leftIcon={{ type: 'font-awesome', name: 'user', color: '#EC86D0' }}
        onChangeText={value => setEmail(value)}
        keyboardType='email-address'
      />

      <Input placeholder="Digite sua senha" 
        color = 'white'
        secureTextEntry={true} 
        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#EC86D0' }}
        onChangeText={value => setSenha(value)}
      />

      <Button title="ENTRAR"
        buttonStyle={styles.botaoPadrao}
        titleStyle={styles.textoBotoes}
        containerStyle={styles.containerBotoes}
        onPress={() => entrar()}
      />

      <Button title="Cadastre-se"
        containerStyle={{
          position: 'absolute',
          bottom: 20,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
          justifyContent: 'flex-end',
        }}
        type="clear"
        titleStyle={{ 
          textDecorationLine: 'underline', 
          color: '#EC86D0' 
        }}
        onPress={() => cadastrar()}        
      />
    </View>
  );
}

