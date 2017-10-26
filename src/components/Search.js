import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  logo: {
    height: 30,
    flex:1
  },
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.85,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  picto: {
    height: 40,
    flex: 1,
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    flex:8,
  }
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  render() {
    const { list } = this.state;
    return (
      <View style={styles.item}>
        <Image style={styles.logo} source={require(`./../images/logo.png`)}/>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={(text) => this.props.onSearchChange(text)}
        />
        <Image style={styles.picto} source={require(`./../images/loupe.png`)}/>
      </View>
    );
  }
}

export default Search;
