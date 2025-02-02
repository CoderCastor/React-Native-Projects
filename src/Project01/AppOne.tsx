import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';

const AppOne = () => {
  return (
    <SafeAreaView>
  
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppOne;

const styles = StyleSheet.create({});
