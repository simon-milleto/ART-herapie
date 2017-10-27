import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, Animated, FlatList } from 'react-native';
import { text, textBold, textBlue, textThin, button } from './../config';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

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
  photo: {
    width: 100,
    height: 100
  },
  descBlock: {
    display: 'flex',
    flexDirection: 'row'
  },
  textDesc: {
    paddingLeft: 10,
    flex:4,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  text,
  blockPrice: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
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

  render() {
    const { calendar } = this.state;
    const { artist } = this.props.navigation.state.params;
    let categories = '';
    let actions = '';
    artist.categories.forEach((category, index) => {
      categories += index == 0 ? category : ` | ${category}`;
    });
    artist.actions.forEach((act, index) => {
      actions += index == 0 ? act : ` | ${act}`;
    });
    return (
      <ScrollView style={styles.full} contentContainerStyle={{paddingVertical: 40}}>
        <View style={styles.descBlock}>
          <Image style={styles.photo} source={{
            uri: artist.url
          }}/>
          <View style={styles.textDesc}>
            <Text style={styles.textBold}>{artist.name.toUpperCase()}</Text>
            <Text style={styles.textBlue}>{categories}</Text>
            <Text style={styles.textThin}>{actions}</Text>
          </View>
          <View style={styles.blockPrice}>
            <Image style={{width: 33, height: 30}} source={require('./../images/coeur_plein.png')}/>
            <Text style={styles.textPrice}>{artist.price}€</Text>
          </View>
        </View>
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
          <TouchableOpacity style={{marginTop: 20}}>
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
              renderItem={({item}) => <Image style={{width: 100, height: 100, marginLeft: 10, paddingBottom: 20}} source={{uri: item.url}}/>}
              keyExtractor={(item, i) => i}
            />
          </View>
          <TouchableOpacity onPress={this.handleClick} style={{marginTop: 20}}>
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

  handleClick = (target) => {
    console.log(target);
  }

}

export default ProfilDetails;
