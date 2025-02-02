// import { StyleSheet, Text, View,useColorScheme } from 'react-native'
// import React from 'react'

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   console.log(isDarkMode)

//   return (
//     <View style={[styles.container,,isDarkMode ? styles.darkTheme:styles.lightTheme]}>
//       <Text style={[{fontSize:40},isDarkMode ? styles.darkText:styles.lightText]} >App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"center"
//   },
//   lightTheme:{
//     backgroundColor:"white"
//   },
//   darkTheme:{
//     backgroundColor:"black"
//   },
//   lightText:{
//     color:"black"
//   },
//   darkText:{
//     color:"white"
//   }
// })

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppOne from './src/Project01/AppOne';

const App = () => {
  return (
    <SafeAreaView>
      <AppOne />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
