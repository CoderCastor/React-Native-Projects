import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Feather';

const NearbyPlaces = () => {
  return (  
    <View>
      <View style={styles.NearbyPlacesTitleFlex}>
        <Text style={styles.headingText}>Nearby Places</Text>
        <Text style={styles.SeeAllButton}>
          {' '}
          See All <Icon
            name="arrow-right-circle"
            size={18}
            color={'white'}
          />{' '}
        </Text>
      </View>

      <ScrollView horizontal>
        <View style={styles.Card}>
          <Image />
          <View style={styles.CardBody}>
            <Text style={styles.Title}></Text>
            <Text style={styles.Label}></Text>
            <Text style={styles.Description}></Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NearbyPlaces;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
  },
  Card: {},
  CardImg: {},
  CardBody: {},
  Title: {},
  Label: {},
  Description: {},
  CardButton: {},
  NearbyPlacesTitleFlex:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:15
  },
  SeeAllButton: {
    color: 'white',
    borderColor: '#FBFBFB',
    backgroundColor:"#500073",
    borderRadius:16,
    borderWidth: 1,
    // width: 0,
    fontSize:15,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginRight:15,
    marginTop:10,
    paddingVertical:5,
    paddingHorizontal:10,
    fontWeight:800
    // elevation:3
  },
});
