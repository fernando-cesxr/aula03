
import { StyleSheet, Text, TextInput, View, Platform, Button, Alert } from 'react-native';
import React from 'react'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mensagem: ''
    }
  }

  mudouMensagem = msg => {
    this.setState({ mensagem: msg })
  }


  render() {

    const { mensagem } = this.state

    return (
      <View style={styles.container}>
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
      </View>
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
  }
});
