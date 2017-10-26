import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import { text } from './../config';

const styles = StyleSheet.create({
  photo: {
    width: 100,
    height: 100,
    flex: 1
  },
  content: {
    width: Dimensions.get('window').width * 0.9,
    marginLeft: Dimensions.get('window').width * 0.05,
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  text: text,
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.7,
    shadowRadius: 5,
    shadowOffset: {
      height: 5,
      width: 0
    }
  },
  textContent: {
    flex:2,
    marginLeft: 10
  }
});

class Profil extends Component {
  constructor(props) {
    super(props);
  }

  onLearnMore = (artist) => {
    this.props.navigation.navigate('ProfilDetails', {artist});
  };

  render() {
    const { artist } = this.props;
    let cat = '';
    artist.categories.forEach((category, index) => {
      cat += index == 0 ? category : ` | ${category}`;
    });
    return (
      <TouchableOpacity
        onPress={() => this.onLearnMore(artist)}
        style={styles.item}>
          <View style={styles.content}>
            <Image style={styles.photo} source={{
              uri: artist.url
            }}/>
            <View style={styles.textContent}>
              <Text style={styles.text}>{artist.name}</Text>
              <Text style={styles.text}>{artist.price}€/h</Text>
              <Text style={styles.text}>{cat}</Text>
            </View>
          </View>
    </TouchableOpacity>
    );
  }
}

export default Profil;
