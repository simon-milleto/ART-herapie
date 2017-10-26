import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
  },
});

const Bookmark = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Bookmark</Text>
  </View>
);

export default Bookmark;
