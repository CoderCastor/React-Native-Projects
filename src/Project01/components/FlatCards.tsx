import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.cards}>
        <View style={[styles.cardCommon,styles.cardOne]}>
          <Text>Red</Text>
        </View>
        
        <View style={[styles.cardCommon,styles.cardTwo]}>
          <Text>Blue</Text>
        </View>

        <View style={[styles.cardCommon,styles.cardThree]}>
          <Text>Green</Text>
        </View>

        

        
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  cards: {
    // backgroundColor:"yellow",
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  cardCommon: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin:10
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  cardFour: {
    backgroundColor: 'purple',
  },
});
