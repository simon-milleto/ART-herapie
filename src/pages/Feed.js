import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

import ListProfil from '../components/ListProfil';
import Search from '../components/Search';

const styles = StyleSheet.create({
  title: {
    fontSize: 80,
  },
  full: {
    paddingBottom: 95,
    backgroundColor: 'white'
  },
});

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filteredList: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/artists').then((response) => {
      this.setState({list: response.data, filteredList: response.data});
    }).catch((error) => {
      alert(error);
    });
  }

  render() {
    const { filteredList } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.full}>
        <Search onSearchChange={(search) => this.handleChange(search)}/>
        <View>
          <ListProfil list={filteredList} navigation={navigation}/>
        </View>
      </View>
    );
  }

  handleChange = (search) => {
    const { list } = this.state;
    let filtered = list.filter((artist) => {
      let check = false;
      artist.categories.forEach((category) => {
        if(category.toLowerCase().includes(search.toLowerCase())){
          check = true;
        }
      });
      check |= artist.name.toLowerCase().includes(search.toLowerCase());
      return check;
    });
    this.setState({ filteredList: filtered })
  };
}

export default Feed;
