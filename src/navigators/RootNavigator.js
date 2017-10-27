import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';
import { Image, Text } from 'react-native';

import Feed from './../pages/Feed';
import Bookmark from './../pages/Bookmark';
import Search from './../pages/Search';
import ProfilDetails from './../pages/ProfilDetails';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
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
    title: () => <Text />,
    navigationOptions: {
      tabBarIcon: () => <Image style={{width: 25, height: 30.5, position:'absolute', bottom: 5}} source={require('./../images/home.png')}/>,
    }
  },
  Bookmark : {
    screen: Bookmark,
    navigationOptions: {
      tabBarIcon: () => <Image style={{width: 25, height: 26, position:'absolute', bottom: 5}} source={require('./../images/coeur_menu.png')}/>,
    }
  },
  Search : {
    screen: Search,
    navigationOptions: {
      tabBarIcon: () => <Image style={{width: 25, height: 30.5, position:'absolute', bottom: 5}} source={require('./../images/messagerie.png')}/>,
    }
  },
  Account : {
    screen: Search,
    navigationOptions: {
      tabBarIcon: () => <Image style={{width: 25, height: 30.5, position:'absolute', bottom: 5}} source={require('./../images/compte.png')}/>,
    }
  },
};

const tabOptions = {
  initialRouteName: 'Feed',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#fff',
    activeBackgroundColor: '#fff',
    labelStyle: {
      fontSize: 16,
    },
    style: {
      height: 40
    }
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
