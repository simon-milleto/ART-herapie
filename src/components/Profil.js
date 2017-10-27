import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import { text, textBold, textBlue, textThin } from './../config';
import ProfilComp from './ProfilComp';

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingTop: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 4,
      width: 0
    }
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
    return (
      <TouchableOpacity
        onPress={() => this.onLearnMore(artist)}
        style={styles.item}>
        <ProfilComp artist={artist}/>
    </TouchableOpacity>
    );
  }
}

export default Profil;
