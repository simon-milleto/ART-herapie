import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import { text, textBold, textBlue, textThin } from './../config';

const styles = StyleSheet.create({
  photo: {
    height: 80,
    width: 80,
    marginBottom: 20
  },
  content: {
    width: Dimensions.get('window').width * 0.9,
    marginLeft: Dimensions.get('window').width * 0.05,
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  textBold,
  textBlue,
  textThin,
  text,
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 4,
      width: 0
    }
  },
  blockText: {
    flex:3,
    marginLeft: 20
  },
  blockPrice: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textPrice: {
    ...text,
    marginRight: 10,
    color: '#3E3E3E'
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
    let categories = '';
    artist.categories.forEach((category, index) => {
      categories += index == 0 ? category : ` | ${category}`;
    });

    let actions = '';
    artist.actions.forEach((act, index) => {
      actions += index == 0 ? act : ` | ${act}`;
    });
    return (
      <TouchableOpacity
        onPress={() => this.onLearnMore(artist)}
        style={styles.item}>
          <View style={styles.content}>
            <Image style={styles.photo} source={{
              uri: artist.url
            }}/>
            <View style={styles.blockText}>
              <Text style={styles.textBold}>{artist.name.toUpperCase()}</Text>
              <Text style={styles.textBlue}>{categories}</Text>
              <Text style={styles.textThin}>{actions}</Text>
            </View>
            <View style={styles.blockPrice}>
              <Image style={{width: 33, height: 30}} source={require('./../images/coeur_plein.png')}/>
              <Text style={styles.textPrice}>{artist.price}€</Text>
            </View>
          </View>
    </TouchableOpacity>
    );
  }
}

export default Profil;
