import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image style={styles.cardImage} source={{uri:""}} />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}> 
                Just like every year, Javascript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity  onPress={()=>{
                openWebsite('https://www.google.com')
            }}>
                <Text>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{
                openWebsite('https://www.github.com/codercastor')
            }}>
                <Text>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCard: {},
  headingContainer:{},
  headerText:{},
  cardImage:{
    height:100
  },
  bodyContainer:{},
  footerContainer:{}

  

});
