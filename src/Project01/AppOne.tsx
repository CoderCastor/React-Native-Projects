import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import TrendingPlaces from './components/TrendingPlaces';
import NearbyPlaces from './components/NearbyPlaces';

const AppOne = () => {
  return (
    <SafeAreaView>
  
      <ScrollView style={styles.container}>
        <FlatCards />
        <ElevatedCards/>
        <TrendingPlaces/>
        <NearbyPlaces/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppOne;

const styles = StyleSheet.create({
  container:{
    padding:12,
    backgroundColor:"white",
    height:"100%"
  }
});
