import { StackNavigator } from 'react-navigation';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Feed from './pages/Feed';
import ProfilDetails from './pages/ProfilDetails';


export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  ProfilDetails: {
    screen: ProfilDetails,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  },
});
