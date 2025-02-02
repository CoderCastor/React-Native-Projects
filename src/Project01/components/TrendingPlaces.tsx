import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const TrendingPlaces = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>

      <ScrollView horizontal>

        <View style={[styles.card, styles.elevatedCard]}>
          <Image
            style={styles.cardImg}
            source={{
              uri: 'https://images.moneycontrol.com/static-mcnews/2023/04/pexels-ankur-bagai-6440428-770x433.jpg?impolicy=website&width=770&height=431',
            }}
          />
          <View style={styles.cardBodyFlex}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Hawa Mahal</Text>
              <Text style={styles.cardLabel}>Pink city, Jaipur</Text>
              <Text style={styles.cardDescription}>
                The hawa Mahal palace in the City Palace.
              </Text>
              <Text style={styles.cardFooter}>✈️ 12 mins away</Text>
            </View>
            <Pressable style={styles.bookTripButton}>
              <Text style={styles.bookTripButtonText}>Book Trip</Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
          <Image
            style={styles.cardImg}
            source={{
              uri: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFqJTIwbWFoYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
            }}
          />
          <View style={styles.cardBodyFlex}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Taj Mahal</Text>
              <Text style={styles.cardLabel}>Agra, Uttar Pradesh</Text>
              <Text style={styles.cardDescription}>
                The Taj Mahal palace in the Agra District.
              </Text>
              <Text style={styles.cardFooter}>✈️ 36 mins away</Text>
            </View>
            <Pressable style={styles.bookTripButton}>
              <Text style={styles.bookTripButtonText}>Book Trip</Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
          <Image
            style={styles.cardImg}
            source={{
              uri: 'https://www.past-india.com/wp-content/uploads/2021/05/DSC_0278WL.jpg',
            }}
          />
          <View style={styles.cardBodyFlex}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>India Gate</Text>
              <Text style={styles.cardLabel}>Pink city, Jaipur</Text>
              <Text style={styles.cardDescription}>
                The hawa Mahal palace in the City Palace.
              </Text>
              <Text style={styles.cardFooter}>✈️ 12 mins away</Text>
            </View>
            <Pressable style={styles.bookTripButton}>
              <Text style={styles.bookTripButtonText}>Book Trip</Text>
            </Pressable>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default TrendingPlaces;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 8,
    // overflow:"hidden",
    padding: 8,
  },
  elevatedCard: {
    backgroundColor: '#F3F8FF',
    elevation: 4,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
  cardImg: {
    height: 250,
    borderRadius: 4,
  },
  cardBodyFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardBody: {
    marginLeft: 5,
    marginVertical: 5,
    width: '70%',
    gap: 2,
  },
  cardTitle: {
    color: 'black',
    fontSize: 23,
    fontWeight: 800,
  },
  cardLabel: {
    color: '#4C585B',
  },
  cardDescription: {
    color: '#9AA6B2',
    fontSize: 10,
  },
  cardFooter: {
    color: 'black',
  },
  bookTripButton: {
    backgroundColor: '#B43F3F',
    paddingVertical: 2,
    paddingHorizontal: 13,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
  },
  bookTripButtonText: {
    fontWeight: 900,
    color: 'white',
  },
});
