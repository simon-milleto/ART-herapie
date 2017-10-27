import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { text, textBold, textBlue, textThin, button } from './../config';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import ProfilComp from './../components/ProfilComp';

const styles = StyleSheet.create({
  full: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row'
  },
  photo: {
    height: 80,
    width: 80,
    marginBottom: 20,
    marginRight: 20
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
    display: 'flex',
    marginLeft: 20,
    flexDirection: 'row'
  },
});

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: false
    }
  }

  render() {
    const { calendar } = this.state;
    const { artist } = this.props.navigation.state.params;
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
      <ScrollView style={styles.full} contentContainerStyle={{paddingVertical: 40}}>
        <View style={styles.blockText}>
        <Image style={styles.photo} source={{
          uri: artist.url
        }}/>
            <Text style={styles.textBold}>{artist.name.toUpperCase()}</Text>
        </View>
      </ScrollView>
    );
  }

}

export default Conversation;
