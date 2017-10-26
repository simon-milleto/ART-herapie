import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { text } from './../config';


const styles = StyleSheet.create({
  full: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 95,
    flex: 1
  },
  photo: {
    width: 150,
    height: 150
  },
  descBlock: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  textDesc: {
    paddingLeft: 10,
    flex:1,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  text: text
});

class ProfilDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { artist } = this.props.navigation.state.params;
    let cat = '';
    artist.categories.forEach((category, index) => {
      cat += index == 0 ? category : ` - ${category}`;
    });
    return (
      <View style={styles.full}>
        <View style={styles.descBlock}>
          <Image style={styles.photo} source={{
            uri: artist.url
          }}/>
          <View style={styles.textDesc}>
            <Text style={styles.text}>{artist.name}</Text>
            <Text style={styles.text}>{cat}</Text>
            <Text style={styles.text}>{artist.price}€/h</Text>
            <Text style={styles.text}>Intervention sur {artist.range}km</Text>
          </View>
        </View>
        <View style={{flex:2}}>
          <Text style={styles.text}>{artist.description}</Text>
        </View>
      </View>
    );
  }

}

export default ProfilDetails;
