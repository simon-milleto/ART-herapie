import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, Animated, TextInput } from 'react-native';
import { text, textBold, textBlue, textThin, button } from './../config';
import ProfilComp from './../components/ProfilComp';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const styles = StyleSheet.create({
  textBold,
  textBlue,
  textThin: {
    ...textThin,
    height: 60
  },
  full: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white'
  },
  inputArea: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    },
    ...textThin,
    fontSize: 16,
    color: 'black',
    minHeight: 140
  },
  input: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    ...textThin,
    fontSize: 16,
    color: 'black',
    textAlign: 'right'
  },
  iconFleche: {
    width: 12,
    height: 12,
    marginRight: 10
  },
  buttonBlue: {
    ...button,
    backgroundColor: '#0dbcba'
  },
  textLight: {
    ...text,
    color: 'white'
  },
});

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      inputHour: 1,
      calendar: false,
      dateChoice: ""
    };
  }

  render() {
    const { artist } = this.props.navigation.state.params;
    const { textInput, inputHour, calendar, dateChoice } = this.state;
    return (
      <ScrollView style={styles.full} contentContainerStyle={{paddingVertical: 40}}>
        <ProfilComp artist={artist}/>
        <TextInput
          style={styles.inputArea}
          multiline={true}
          numberOfLines={4}
          onChangeText={(textInput) => this.setState({textInput})}
          placeholder={`Laisser un message à ${artist.name}`}
          value={textInput}/>
          <TouchableOpacity onPress={this.toggleCalendar} style={{marginTop: 20}}>
            <View style={{borderBottomWidth: 1, borderBottomColor: 'black', flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Choisir date{ dateChoice ? ` | ${dateChoice}` : ''}</Text>
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
              onDayPress={(day) => {this.handleCalendar(day)}}
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
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text>
                Nombre d'heures
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(inputHour) => this.setState({inputHour})}
                placeholder="1"
                value={inputHour}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text>
                Total
              </Text>
              <Text>
                {inputHour*artist.price}€
              </Text>
            </View>
            <TouchableOpacity onPress={() => this.handleValidation()} style={{marginTop: 20}}>
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

  handleCalendar = (day) => {
    const { artist } = this.props.navigation.state.params;
    if(artist.dateAvailable[day.dateString]){
      this.toggleCalendar();
      this.setState({dateChoice: day.dateString});
    }else{
      alert('Cette date n\'est pas disponible');
    }
  }

  handleValidation = () => {
    const { artist } = this.props.navigation.state.params;
    const { inputHour, dateChoice } = this.state;
    console.log(inputHour);
    if(inputHour == 0 && !isNaN(parseFloat(inputHour)) && isFinite(inputHour)) {
      alert('Vous devez rentrer un nombre d\'heures valide');
    }else if(!dateChoice){
      alert('Vous devez choisir une date');
    }
  }
}

export default Reservation;
