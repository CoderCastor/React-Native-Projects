import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText} >Elevated Cards</Text>
      <ScrollView horizontal={true} >
        <View style={[styles.cardCommon,styles.cardOne]}>
            <Text>Drag</Text>
        </View>
        <View style={[styles.cardCommon,styles.cardTwo]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.cardCommon,styles.cardThree]}>
            <Text>To</Text>
        </View>
        <View style={[styles.cardCommon,styles.cardFour]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.cardCommon,styles.cardFive]}>
            <Text>More</Text>
        </View>
        <View style={[styles.cardCommon,styles.cardSix]}>
            <Text>😄</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10,
      },
      cards: {
        // backgroundColor:"yellow",
        
        // backgroundColor:"gray"
      },
      cardCommon: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        margin:5,
        shadowColor:"white",
        shadowOffset:{
            height:100,
            width:100
        },
        shadowRadius:100,
        opacity:1
      },
      cardOne: {
        backgroundColor: '#493D9E',
      },
      cardTwo: {
        backgroundColor: '#B2A5FF',
      },
      cardThree: {
        backgroundColor: '#DAD2FF',
      },
      cardFour: {
        backgroundColor: '#FFF2AF',
      },
      cardFive: {
        backgroundColor: 'pink',
      },
      cardSix: {
        backgroundColor: 'orange',
      },
      
})