import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  photo: {
    height: 80,
    width: 80,
    marginBottom: 20
  },
});

class Fav extends Component {
  constructor(props) {
    super(props);
  }

  favArtist = () => {
    const { artist } = this.props;
    artist.favorite = !artist.favorite;
    console.log(`http://localhost:3000/artists/${artist.id}`);
    axios.post(`http://localhost:3000/artists/${artist.id}`, artist)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  };

  render() {
    const { artist } = this.props;
    let img = artist.favorite ? require('./../images/coeur_plein.png') : require('./../images/coeur_vide.png');
    return (
      <TouchableOpacity
        onPress={() => this.favArtist()}>
        <Image style={{width: 33, height: 30}} source={img}/>
    </TouchableOpacity>
    );
  }
}

export default Fav;
