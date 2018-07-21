//import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';// don't nead js
import AlbumList from './src/components/AlbumList';
//Component
//no global variable
const App = () => (
    //to use Text we have to import structure
  <View style={{ flex: 1 }} >
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render it to the device
//implicity return when there is () to the =>
// album-> from where I take it
//App ->return the first component and at least one
AppRegistry.registerComponent('albums', () => App);
