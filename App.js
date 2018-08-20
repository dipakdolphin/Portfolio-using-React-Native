/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import FirstScreen from './FirstScreen'; 
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

let Tab = createBottomTabNavigator({
  First:{
    screen:FirstScreen,
    navigationOptions:{
      tabBarLabel:"Profile",
      tabBarIcon: ({tintColor})=>(
        <Icon name ="ios-person" color= {tintColor} size={24}/>
      )
    }


  },
  Second:{
    screen:SecondScreen,
    navigationOptions:{
      tabBarLabel:"About",
      tabBarIcon: ({tintColor})=>(
        <Icon name ="ios-briefcase" color= {tintColor} size={24}/>
      )
    }

    
  },
  Third:{
    screen:ThirdScreen,
    navigationOptions:{
      tabBarLabel:"Contact",
      tabBarIcon: ({tintColor})=>(
        <Icon name ="ios-call" color= {tintColor} size={24}/>
      )
    }

    
  }
},{
  tabBarOptions:{
    activeTintColor:'red',
    inactiveTintColor:'grey',
    labelStyle:{
      fontSize:14,
    }
  }
});

export default class App extends Component{

  render() {
    return (
        <Tab/>
    );
    
  }
}


