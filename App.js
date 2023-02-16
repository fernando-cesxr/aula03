
import { StyleSheet, Text, TextInput, View, Platform, Button, Alert, Image, ImageBackground, TouchableOpacity, Switch, ActivityIndicator, ScrollView} from 'react-native';
import React from 'react'
import Imagem1 from './imagem.jpg'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mensagem: '',
      isEnabled: false
    }
  }

  mudouMensagem = msg => {
    this.setState({ mensagem: msg })
  }


  render() {

    const { mensagem } = this.state

    return (
      <ScrollView>
        <ImageBackground source = {{ uri:'https://mobimg.b-cdn.net/v3/fetch/62/62e3ce60fc426fe6f475764cd99779b9.jpeg'}} style = {styles.container} >

          {Platform.OS === 'android' ? (
            <Text style={styles.text}>Android</Text>
          ) : (
            <Text style={styles.text}>IOS</Text>
          )}
          <Text style={styles.text}>FIAP</Text>
          {/* <Text style={[styles.text, { color: 'gray' }]}>Portal do Aluno</Text> */}
          <Text style={[styles.text, styles.textColor]}>Portal do Aluno</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Username'
            onChangeText={this.mudouMensagem}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Password'
          />
          <Button 
            title='Clique'
            onPress={() => alert( mensagem )}
          />
          <TouchableOpacity style = {styles.button}> 
            <Text style = {styles.textButton}
            onPress={()=> alert('Esqueci a senha')}
            activeOpacity = {0.7}> 
            Esqueci minha senha </Text>
          </TouchableOpacity>
          <Switch value = {this.state.isEnabled} onValueChange = {()=> this.setState({isEnabled: !this.state.isEnabled})} thumbColor = '#000' trackColor = {{false: '#d3d3d3', true: '#000' }}/>
          {this.state.isEnabled ? (<ActivityIndicator color = 'green' size = {50}/>) : <></>}
          <Image source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4qErv4sV_W393kliIcFuW9zjthpvjKvttnjlfXVZ&s'}} style = {styles.imagem}/> 
          <br/>
        {/* <Image source = {Imagem1} style = {styles.imagem}/> */}
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
  },
  textColor: {
    color: 'gray',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: 300,
  },
  imagem:{
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: 'red',
    padding: 10, 
    borderWidth: 1,
    borderRadius: 15,
    margintop: 10,
  },
  textButton: {
    fontSize: 15,
    color: '#FFF'
  },
});
