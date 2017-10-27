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
    flex: 1,
    flexDirection: 'row'
  },
  textBold,
  textBlue,
  textThin,
  text,
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

class ProfilComp extends Component {
  constructor(props) {
    super(props);
  }

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
    let img = artist.favorite ? require('./../images/coeur_plein.png') : require('./../images/coeur_vide.png');
    return (
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
            <Image style={{width: 33, height: 30}} source={img}/>
            <Text style={styles.textPrice}>{artist.price}€</Text>
          </View>
        </View>
    );
  }
}

export default ProfilComp;
