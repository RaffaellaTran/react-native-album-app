//import library
import React from 'react';
import { Text, View } from 'react-native';
//component

const Header = (props) => {
  // for not resign every time style
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
   paddingTop: 15,
    //shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
//shadow for Android is elevation
    elevation: 4,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20
  }
};


//component available for the other parts of the App
export default Header;
