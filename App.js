import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAWAwKL5tpDCEYkp7_ymnNKL9MT5f5InRQ",
  authDomain: "devcampfirebase.firebaseapp.com",
  databaseURL: "https://devcampfirebase.firebaseio.com/",
  storageBucket: "gs://devcampfirebase.appspot.com/"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

function storeHighScore(userId, score) {
  firebase.database().ref('users/' + userId).set({
    highscore: score
  });
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
  
  setupHighscoreListener(userId) {
    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
      const highscore = snapshot.val().highscore;
      console.log("New high score: " + highscore);
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
