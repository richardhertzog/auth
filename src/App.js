import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDBRGLXJXONngbx3ZF-s5DOHwGtn6VZQuE',
      authDomain: 'auth-3d889.firebaseapp.com',
      databaseURL: 'https://auth-3d889.firebaseio.com',
      projectId: 'auth-3d889',
      storageBucket: 'auth-3d889.appspot.com',
      messagingSenderId: '691886585063'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
