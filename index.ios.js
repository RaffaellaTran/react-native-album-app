//import library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';// don't nead js
//Component
//no global variable
const App = () => (
    //to use Text we have to import structure
    <Header headerText={'Albums'} />
);

//render it to the device
//implicity return when there is () to the =>
// album-> from where I take it
//App ->return the first component and at least one
AppRegistry.registerComponent('albums', () => App);
