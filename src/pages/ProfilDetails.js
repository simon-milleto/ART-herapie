import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, Animated, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { text, textBold, textBlue, textThin, button } from './../config';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import ProfilComp from './../components/ProfilComp';

const styles = StyleSheet.create({
  textBold,
  textBlue,
  textThin: {
    ...textThin,
    height: 60
  },
  text,
  full: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white'
  },
  text,
  iconFleche: {
    width: 12,
    height: 12,
    marginRight: 10
  },
  button,
  textLight: {
    ...text,
    color: 'white'
  },
  buttonBlue: {
    ...button,
    backgroundColor: '#0dbcba'
  }
});

class ProfilDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: false
    }
  }

  handleReservation = (artist) => {
    this.props.navigation.navigate('Reservation', {artist});
  };

  handleContact = () => {
    const { artist } = this.props.navigation.state.params;
    this.props.navigation.navigate('Conversation', {artist});
  };

  render() {
    const { calendar } = this.state;
    const { artist } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.full} contentContainerStyle={{paddingVertical: 40}}>
        <ProfilComp artist={artist}/>
        <View>
          <Text style={styles.text}>{artist.description}</Text>
        </View>
        <TouchableOpacity onPress={this.toggleCalendar} style={{marginTop: 20}}>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'black', flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Voir les disponibilités de l'artiste </Text>
            <Image style={styles.iconFleche} source={require('./../images/fleche.png')}/>
          </View>
        </TouchableOpacity>
        <View>
          {calendar ? <Calendar
            current={'2017-10-27'}
            markedDates={
              artist.dateAvailable
             }
             markingType={'interactive'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {console.log('selected day', day)}}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {console.log('month changed', month)}}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={true}
          /> : null}
          </View>
          <TouchableOpacity onPress={() => this.handleContact()} style={{marginTop: 20}}>
            <View style={styles.button}>
              <Text style={styles.text}>Contacter cet artiste</Text>
            </View>
          </TouchableOpacity>
          <View style={{marginTop: 30}}>
            <Text style={styles.textBold}>
              {`Son portfolio`.toUpperCase()}
            </Text>
            <FlatList
              data={artist.projects}
              horizontal={true}
              style={{display: 'flex'}}
              renderItem={({item}) => <Image style={{width: 90, height: 90, marginLeft: 10, paddingBottom: 20}} source={{uri: item.url}}/>}
              keyExtractor={(item, i) => i}
            />
          </View>
          <TouchableOpacity onPress={() => this.handleReservation(artist)} style={{marginTop: 20}}>
            <View style={styles.buttonBlue}>
              <Text style={styles.textLight}>Reserver cet artiste</Text>
            </View>
          </TouchableOpacity>
      </ScrollView>
    );
  }

  toggleCalendar = () => {
    const { calendar } = this.state;
    this.setState({calendar: !calendar});
  }

}

export default ProfilDetails;
