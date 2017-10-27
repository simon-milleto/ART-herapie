import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';
import { Image, Text } from 'react-native';

import Feed from './../pages/Feed';
import Favourites from './../pages/Favourites';
import Messenger from './../pages/Messenger';
import Account from './../pages/Account';
import ProfilDetails from './../pages/ProfilDetails';
import Reservation from './../pages/Reservation';
import Conversation from './../pages/Conversation';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
  },
  ProfilDetails: {
    screen: ProfilDetails,
    title: 'Details',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.artist.name}`,
    }),
  },
  Reservation: {
    screen: Reservation,
    title: 'Reservation',
    navigationOptions: ({ navigation }) => ({
      title: `Réserver ${navigation.state.params.artist.name}`,
    }),
  }
});

export const MessengerStack = StackNavigator({
  Messenger: {
    screen: Messenger,
  },
  Conversation: {
    screen: Conversation,
    title: 'Conversation',
    navigationOptions: ({ navigation }) => ({
      title: `Discuter avec ${navigation.state.params.artist.name}`,
    }),
  }
});

export const FavouritesStack = StackNavigator({
  Favourites: {
    screen: Favourites,
  },
  ProfilDetails: {
    screen: ProfilDetails,
    title: 'Favourites',
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
  Favourites : {
    screen: FavouritesStack,
    navigationOptions: {
      tabBarIcon: () => <Image style={{width: 25, height: 24, position:'absolute', bottom: 5}} source={require('./../images/coeur_menu.png')}/>,
    }
  },
  Messenger : {
    screen: MessengerStack,
    navigationOptions: {
      tabBarIcon: () => <Image style={{width: 25, height: 18, position:'absolute', bottom: 10}} source={require('./../images/messagerie.png')}/>,
    }
  },
  Account : {
    screen: Account,
    navigationOptions: {
      tabBarIcon: () => <Image style={{width: 25, height: 32, position:'absolute', bottom: 5}} source={require('./../images/compte.png')}/>,
    }
  }
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

const AppRouter = StackNavigator({
    FeedStack: { screen: FeedStack},
    RootNavigator: { screen: RootNavigator}
})

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
