import React, { Component } from 'react';
import { Text, View, TextInput, Input, Button, Image, TouchableOpacity, AppRegistry, StyleSheet, KeyboardAvoidingView, ImageBackground} from 'react-native';

export default class Login extends Component {
    render() {
        return (
          <ImageBackground  style={estilo.fundo} source={require('./fundo4.jpeg')}>



                <TextInput style={estilo.caixa}
                placeholderTextColor="#fff" placeholder="email"/>

                <TextInput secureTextEntry={true} style={estilo.caixa}
                placeholderTextColor="#fff" placeholder="senha"/>

                <TouchableOpacity style={estilo.but}>
                <Text style={estilo.texto}>Login</Text>
                </TouchableOpacity>


                </ImageBackground>


        );
    }
}

const estilo = StyleSheet.create({


caixa: {
    width: 250,
    height: 35,
    margin: 10,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#D00336',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    top: -40,
      opacity: 0.8
  },



  but: {
  width: 100,
  height: 35,
  margin: 10,
  alignSelf: 'center',
  borderRadius: 20,
  backgroundColor: '#48BBEC',
  justifyContent: 'center',
  top: -30

 },


 texto: {
   color: '#fff',
   textAlign: 'center'
 },


 fundo: {
  flex: 2,

  justifyContent: 'center',
  alignItems: 'center',
  width: null,
  height: null
   },

  });


AppRegistry.registerComponent('Login', () => Login);
