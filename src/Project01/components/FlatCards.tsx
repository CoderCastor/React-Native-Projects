import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.cards}>
        <View style={[styles.cardCommon, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.cardCommon, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>

        <View style={[styles.cardCommon, styles.cardThree]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.cardCommon, styles.cardFour]}>
          <Text>Purple</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  container: {
    // padding: 12,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  cards: {
    // backgroundColor:"yellow",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:"gray"
  },
  cardCommon: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  cardOne: {
    backgroundColor: '#EB5A3C',
  },
  cardTwo: {
    backgroundColor: '#DF9755',
  },
  cardThree: {
    backgroundColor: '#E7D283',
  },
  cardFour: {
    backgroundColor: '#EDF4C2',
  },
});
