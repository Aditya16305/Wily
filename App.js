import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import BookTransactions from './Screens/BookTransaction';
import SearchScreen from './Screens/SearchScreen';

export default class App extends React.Component {
  render () {
    return <AppContainer/> 
  }
}

const tabNavigator = createBottomTabNavigator ({
  Transactions: {screen: BookTransactions},
  Search: {screen: SearchScreen}
},
{
  defaultNavigationOptions: ({navigation}) => {
    tabBarIcon: () => {
      const routeName = navigation.state.routeName;
      console.log(routeName);
      if(routeName === 'Transactions') {
        return (
          <Image source = {require('./assets/book.png')} 
          style = {{width: 40, height: 40}} ></Image>
        )
      }

      else if(routeName === Search) {
        return (
          <Image source = {require('./assets/searchingbook.png')} 
          style = {{width: 40, height: 40}} ></Image>
        )
      }
    }
  }
}
)

const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
})