import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Profil from '../components/Profil';

const styles = StyleSheet.create({
  list: {
    position: 'relative'
  },
});

class ListProfil extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list, navigation } = this.props;
    return (
        <FlatList
          data={list}
          renderItem={({item}) => <Profil artist={item} navigation={navigation}/>}
          keyExtractor={(item) => item.id}
           contentContainerStyle={{paddingVertical: 40}}
        />
    );
  }
}

export default ListProfil;
