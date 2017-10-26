import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';

import Feed from './../pages/Feed';
import Bookmark from './../pages/Bookmark';
import Search from './../pages/Search';
import ProfilDetails from './../pages/ProfilDetails';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  ProfilDetails: {
    screen: ProfilDetails,
    title: 'Feed',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.artist.name}`,
    }),
  },
});

const tabScenes = {
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
    }
  },
  Bookmark: { screen: Bookmark },
  Search: { screen: Search },
};

const tabOptions = {
  initialRouteName: 'Feed',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#1a1a1a',
    labelStyle: {
      fontSize: 16,
    },
  },
};

export const RootNavigator = TabNavigator(tabScenes, tabOptions);

const TabRouter = ({ dispatch, nav }) => (
  <RootNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}/>
);

TabRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export default connect(state => ({
  nav: state.nav
}))(TabRouter);
